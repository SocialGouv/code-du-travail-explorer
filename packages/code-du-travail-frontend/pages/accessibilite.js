import {
  Container,
  PageTitle,
  Section,
  theme,
  Title,
  Wrapper,
} from "@socialgouv/cdtn-ui";
import React from "react";

import { A11yLink } from "../src/common/A11yLink";
import Metas from "../src/common/Metas";
import { Layout } from "../src/layout/Layout";

const Accessibilite = () => (
  <Layout>
    <Metas
      title="Accessibilité - Code du travail numérique"
      description="Accessibilité du site du Code du travail numérique"
    />
    <Section>
      <Container narrow>
        <PageTitle>Accessibilité</PageTitle>
        <Wrapper variant="main">
          <Title shift={theme.spacings.larger}>
            Déclaration d’accessibilité
          </Title>
          <p>
            Le Ministère du travail, de l’emploi et de l’insertion s’engage à
            rendre son service accessible conformément à l’article 47 de la loi
            n° 2005-102 du 11 février 2005.
          </p>
          <p>
            À cette fin, il met en œuvre la stratégie et les actions suivantes :
            <ul>
              <li>
                La réalisation d’un audit de conformité le 19 mai de l’année
                2021.
              </li>
              <li>
                La mise en œuvre des recommandations pour atteindre l’objectif
                de 75% d’ici la fin de l’année 2021.
              </li>
            </ul>
          </p>
          <p>
            Cette déclaration d’accessibilité s’applique au site Internet
            code.travail.gouv.fr.
          </p>
          <Title shift={theme.spacings.larger}>État de conformité</Title>
          <p>
            Le site Internet code.travail.gouv.fr  est en conformité partielle
            avec le référentiel général d’amélioration de l’accessibilité (RGAA)
            « version 4.1 ».
          </p>
          <p>
            Nous tâchons de rendre dès la conception, ce site accessible à
            toutes et à tous.
          </p>
          <Title shift={theme.spacings.larger}>Résultat des tests</Title>
          <p>
            L’audit de conformité réalisé par Alter Way révèle que :
            <ul>
              <li>[50%] des critères du RGAA version 4.1 sont respectés</li>
            </ul>
          </p>
          <Title>Non-conformité</Title>
          <ul>
            <li>
              Critère 1.1. Chaque image porteuse d’information a-t-elle
              une alternative textuelle ?
            </li>
            <li>
              Critère 1.2. Chaque image de décoration est-elle correctement
              ignorée par les technologies d’assistance ?
            </li>
            <li>
              Critère 3.1. Dans chaque page web, l’information ne doit pas être
              donnée uniquement par la couleur. Cette règle est-elle respectée ?
            </li>
            <li>
              Critère 3.2. Dans chaque page web, le contraste entre la couleur
              du texte et la couleur de son arrière-plan est-il suffisamment
              élevé (hors cas particuliers) ?
            </li>
            <li>
              Critère 5.7. Pour chaque tableau de données, la technique
              appropriée permettant d’associer chaque cellule avec
              ses en-têtes est-elle utilisée (hors cas particuliers) ?
            </li>
            <li>
              Critère 6.2. Dans chaque page web, chaque lien a-t-il
              un intitulé ?
            </li>
            <li>
              Critère 7.1. Chaque script est-il, si nécessaire, compatible avec
              les technologies d’assistance ?
            </li>
            <li>
              Critère 7.3. Chaque script est-il contrôlable par le clavier et
              par tout dispositif de pointage (hors cas particuliers) ?
            </li>
            <li>
              Critère 7.4. Pour chaque script qui initie un changement de
              contexte, l’utilisateur est-il averti ou en a-t-il le contrôle ?
            </li>
            <li>
              Critère 7.5. Dans chaque page web, les messages de statut sont-ils
              correctement restitués par les technologies d’assistance ?
            </li>
            <li>
              Critère 8.2. Pour chaque page web, le code source généré est-il
              valide selon le type de document spécifié ?
            </li>
            <li>
              Critère 8.6. Pour chaque page web ayant un titre de page, ce titre
              est-il pertinent ?
            </li>
            <li>
              Critère 8.7. Dans chaque page web, chaque changement de
              langue est-il indiqué dans le code source (hors cas
              particuliers) ?
            </li>
            <li>
              Critère 8.9. Dans chaque page web, les balises ne doivent pas être
              utilisées uniquement à des fins de présentation. Cette règle
              est-elle respectée ?
            </li>
            <li>
              Critère 9.1. Dans chaque page web, l’information est-elle
              structurée par l’utilisation appropriée de titres ?
            </li>
            <li>
              Critère 9.2. Dans chaque page web, la structure du
              document est-elle cohérente (hors cas particuliers) ?
            </li>
            <li>
              Critère 9.3. Dans chaque page web, chaque liste est-elle
              correctement structurée ?
            </li>
            <li>
              Critère 10.6. Dans chaque page web, chaque lien dont la nature
              n’est pas évidente est-il visible par rapport au texte
              environnant ?
            </li>
            <li>
              Critère 11.1. Chaque champ de formulaire a-t-il une étiquette ?
            </li>
            <li>
              Critère 11.4. Dans chaque formulaire, chaque étiquette de champ et
              son champ associé sont-ils accolés (hors cas particuliers) ?
            </li>
            <li>
              Critère 11.5. Dans chaque formulaire, les champs de même
              nature sont-ils regroupés, si nécessaire ?
            </li>
            <li>
              Critère 11.9. Dans chaque formulaire, l’intitulé de
              chaque bouton est-il pertinent (hors cas particuliers) ?
            </li>
            <li>
              Critère 12.6. Les zones de regroupement de contenus présentes dans
              plusieurs pages web (zones d’en-tête, de navigation principale,
              de contenu principal, de pied de page et de moteur de recherche)
              peuvent-elles être atteintes ou évitées ?
            </li>
            <li>
              Critère 12.8. Dans chaque page web, l’ordre de
              tabulation est-il cohérent ?
            </li>
          </ul>
          <Title shift={theme.spacings.larger}>
            Établissement de cette déclaration d’accessibilité
          </Title>
          <p>
            Cette déclaration a été établie le 12 avril 2021. Elle a été mise à
            jour le 23/06/2021.
          </p>
          <Title shift={theme.spacings.larger}>
            ​Technologies utilisées pour la réalisation du Code du travail
            numérique
          </Title>
          <ul>
            <li>HTML5</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <Title shift={theme.spacings.larger}>Environnement de test</Title>
          <p>
            Les vérifications de restitution de contenus ont été réalisées sur
            la base de la combinaison fournie par la base de référence du RGAA
            4.1, avec les versions suivantes :
          </p>
          <ul>
            <li>Firefox</li>
            <li>NVDA</li>
          </ul>
          <Title shift={theme.spacings.larger}>
            Outils pour évaluer l’accessibilité
          </Title>
          <p>
            Les vérifications de restitution de contenus ont été réalisées sur
            la base de la combinaison fournie par la base de référence du RGAA
            4.1, avec les versions suivantes :
          </p>
          <ul>
            <li>wave</li>
            <li>web developper toolbar</li>
            <li>headings maps</li>
            <li>wcag color contrast checker</li>
            <li>
              <a href="https://validator.w3.org" title="Validateur html du w3c">
                Validateur w3c
              </a>
            </li>
          </ul>
          <Title shift={theme.spacings.larger}>Amélioration et contact</Title>
          <p>
            Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
            pouvez contacter le responsable du site Internet
            code.travail.gouv.fr pour être orienté vers une alternative
            accessible ou obtenir le contenu sous une autre forme.
          </p>
          <p>
            E-mail :{" "}
            <a
              href="mailto:codedutravailnumérique@travail.gouv.fr"
              title="Envoyer un mail à codedutravailnumerique@travail.gouv.fr"
            >
              codedutravailnumerique@travail.gouv.fr
            </a>
          </p>
          <p>Nous essayons de répondre le plus rapidement possible.</p>
          <Title shift={theme.spacings.larger}>Voies de recours</Title>
          <p>Cette procédure est à utiliser dans le cas suivant.</p>

          <p>
            Vous avez signalé au responsable du site internet un défaut
            d’accessibilité qui vous empêche d’accéder à un contenu ou à un des
            services du portail et vous n’avez pas obtenu de réponse
            satisfaisante.
          </p>
          <p>
            Vous pouvez :
            <ul>
              <li>
                <A11yLink
                  href="https://formulaire.defenseurdesdroits.fr/code/afficher.php?ETAPE=accueil_2016"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Écrire un message au Défenseur des droits
                </A11yLink>
              </li>
              <li>
                <A11yLink
                  href="https://www.defenseurdesdroits.fr/saisir/delegues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacter le délégué du Défenseur des droits dans votre région
                </A11yLink>
              </li>
              <li>
                Envoyer un courrier par la poste (gratuit, ne pas mettre de
                timbre) : <br />
                Défenseur des droits <br />
                Libre réponse 71120 <br />
                75342 Paris CEDEX 07
              </li>
            </ul>
          </p>
          <Title shift={theme.spacings.larger}>
            En savoir plus sur l’accessibilité
          </Title>
          <p>
            Pour en savoir plus sur la politique d’accessibilité numérique de
            l’État : <br />
            <A11yLink
              href="http://references.modernisation.gouv.fr/accessibilite-numerique"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://references.modernisation.gouv.fr/accessibilite-numerique
            </A11yLink>
          </p>
        </Wrapper>
      </Container>
    </Section>
  </Layout>
);
export default Accessibilite;
