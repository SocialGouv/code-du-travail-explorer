import data from "@cdtn/simulateurs/preavis-licenciement.data.json";

import { isNotYetProcessed } from "../common/situations.utils";
import { StepInformations } from "./steps/Informations";
import { StepInfoCCn } from "./steps/InfosCCn";
import { StepIntro } from "./steps/Introduction";
import { StepResult } from "./steps/Result";
import { StepStatus } from "./steps/Status";

export const initialState = {
  stepIndex: 0,
  steps: [
    {
      component: StepIntro,
      label: "Introduction",
      name: "intro",
    },
    {
      component: StepStatus,
      label: "Situation du salarié",
      name: "situation",
    },
    {
      component: StepInfoCCn,
      label: "Convention collective",
      name: "info_cc",
    },
    {
      component: StepInformations,
      label: "Informations complémentaires",
      name: "infos",
      skip: (values) =>
        !values.ccn ||
        (values.ccn && isNotYetProcessed(data.situations, values.ccn.num)),
    },
    {
      component: StepResult,
      label: "Durée du préavis",
      name: "results",
    },
  ],
};

export function stepReducer(state, { type, payload }) {
  switch (type) {
    case "reset": {
      return { ...initialState };
    }
    case "setStepIndex": {
      return { stepIndex: payload, steps: state.steps };
    }
    default:
      console.warn("action unknow", type);
      return state;
  }
}
