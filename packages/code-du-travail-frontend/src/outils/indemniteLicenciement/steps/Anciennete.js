import React from "react";
import PropTypes from "prop-types";
import { Container } from "@cdt/ui";
import { Field } from "react-final-form";
import createDecorator from "final-form-calculate";
import { isAfter, differenceInMonths, format } from "date-fns";

import { YesNoQuestion } from "../components/YesNoQuestion";
import { TextQuestion } from "../components/TextQuestion";
import { AbsencePeriods, motifs } from "../components/AbsencePeriods";
import { SectionTitle } from "../components/styledComponents";
import { ErrorComputedField } from "../components/ErrorField";

function validate({
  dateEntree,
  dateSortie,
  dateNotification,
  absencePeriods = []
}) {
  const errors = {};
  const dEntree = new Date(dateEntree);
  const dSortie = new Date(dateSortie);
  const dNotification = new Date(dateNotification);

  if (dateEntree && dateSortie && isAfter(dEntree, dSortie)) {
    errors.dateSortie = (
      <>
        La date de sortie doit se situer après le
        <strong> {format(dEntree, "DD MMMM YYYY")}</strong>
      </>
    );
  }

  const totalAbsence =
    (absencePeriods || [])
      .filter(period => Boolean(period.duration))
      .reduce((total, item) => {
        const motif = motifs.find(motif => motif.label === item.type);
        return total + item.duration * motif.value;
      }, 0) / 12;

  if (
    dateEntree &&
    dateSortie &&
    isAfter(new Date("2017-09-27"), dNotification) &&
    differenceInMonths(dNotification, dEntree) - totalAbsence < 12
  ) {
    errors.anciennete =
      "L’indemnité de licenciement est dûe au-delà de 12 mois d’ancienneté";
  }
  if (
    dateEntree &&
    dateSortie &&
    isAfter(dNotification, new Date("2017-09-27")) &&
    differenceInMonths(dNotification, dEntree) - totalAbsence < 8
  ) {
    errors.anciennete =
      "L’indemnité de licenciement est dûe au-delà de 8 mois d’ancienneté";
  }

  if (dateNotification && dateSortie && isAfter(dNotification, dSortie)) {
    errors.dateNotification = `La date de notification doit se situer avant la date de sortie`;
  }
  if (dateNotification && dateEntree && isAfter(dateEntree, dNotification)) {
    errors.dateNotification = `La date de notification doit se situer après la date d’entrée`;
  }
  return errors;
}

function StepAnciennete({ form }) {
  return (
    <Container>
      <SectionTitle>Dates d’entrée et de sortie de l’entreprise</SectionTitle>
      <TextQuestion
        name="dateEntree"
        label="Quelle est votre date d’entrée dans l’entreprise&nbsp;?"
        inputType="date"
      />
      <TextQuestion
        name="dateNotification"
        label="À quelle date votre licenciement vous a-t-il été notifié&nbsp;?"
        inputType="date"
      />
      <TextQuestion
        name="dateSortie"
        label="Quelle est votre date de sortie de l’entreprise (incluant la durée de votre préavis)&nbsp;?"
        inputType="date"
      />
      <ErrorComputedField name="anciennete" />
      <SectionTitle>Période d’absence prolongée (plus d’un mois)</SectionTitle>
      <YesNoQuestion
        name="hasAbsenceProlonge"
        label="Avez-vous eu des périodes d’absence de plus d’un mois au cours
        de votre contrat&nbsp;?"
        onChange={hasAbsenceProlonge => {
          hasAbsenceProlonge
            ? form.change("absencePeriods", [
                {
                  type: "Absence pour maladie non professionnelle",
                  duration: null
                }
              ])
            : form.change("absencePeriods", []);
        }}
      />
      <Field name="hasAbsenceProlonge">
        {({ input }) =>
          input.value === true ? (
            <AbsencePeriods
              name="absencePeriods"
              onChange={absencePeriods => {
                if (absencePeriods.length === 0) {
                  form.change("hasAbsenceProlonge", false);
                }
              }}
            />
          ) : null
        }
      </Field>
    </Container>
  );
}

StepAnciennete.validate = validate;
/**
 * The decorator here is used to compute the ancienneté value
 * based on the data provided by the user
 * decorator can only be used in initialSteps since final-form do not allows
 * decorator to be added once the form is created
 */
StepAnciennete.decorator = createDecorator({
  field: /date|absencePeriods/,
  updates: {
    anciennete: (_, { dateEntree, dateSortie, absencePeriods = [] }) => {
      const dEntree = new Date(dateEntree);
      const dSortie = new Date(dateSortie);
      // on calcule totalAbsence en mois par année (ex: 12mois = 1)
      // pour pouvoir ensuite le retranché de l’anciennété qui est aussi en mois par année
      const totalAbsence =
        (absencePeriods || [])
          .filter(period => Boolean(period.duration))
          .reduce((total, item) => {
            const motif = motifs.find(motif => motif.label === item.type);
            return total + item.duration * motif.value;
          }, 0) / 12;
      return (differenceInMonths(dSortie, dEntree) - totalAbsence) / 12;
    }
  }
});

StepAnciennete.propTypes = {
  form: PropTypes.object.isRequired
};
export { StepAnciennete };
