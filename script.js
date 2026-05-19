const stepContent = {
  frage: {
    title: "Frage klären",
    body: "Eine tragfähige agentische Recherche beginnt mit einem präzisen Auftrag. Ohne Scope produziert das System nur plausible Breite.",
    output: "Artefakt: Research-Auftrag"
  },
  plan: {
    title: "Suchplan bauen",
    body: "Der Planner zerlegt die Frage in Teilfragen, Begriffe, Perspektiven und Gegenpositionen. Das macht den späteren Suchweg überprüfbar.",
    output: "Artefakt: Suchplan"
  },
  quellen: {
    title: "Quellenraum begrenzen",
    body: "Der Retriever arbeitet in einem definierten Korpus. Herkunft, Datum, Quellenart und Nutzungsgrenze werden sichtbar mitgeführt.",
    output: "Artefakt: Quellenliste mit Status"
  },
  analyse: {
    title: "Befunde extrahieren",
    body: "Der Analyst trennt Kernaussage, Kontext, Methode und möglichen Claim. Eine Quelle wird nicht automatisch zur These.",
    output: "Artefakt: Finding-Liste"
  },
  kritik: {
    title: "Kritik erzwingen",
    body: "Der Critic sucht Lücken, schwache Evidenz, Anbieterclaims, Zitationsschleifen, Gegenpositionen und zu starke Formulierungen.",
    output: "Artefakt: Risiko- und Widerspruchsnotiz"
  },
  synthese: {
    title: "Arbeitsstand formulieren",
    body: "Die Synthese verdichtet für eine Zielgruppe, bleibt aber als Arbeitsstand markiert. Sie ersetzt weder Originallektüre noch fachliche Entscheidung.",
    output: "Artefakt: Research-Notiz"
  },
  review: {
    title: "Fachlich freigeben",
    body: "Lehrende oder Forschende prüfen Quellen, Grenzen und Relevanz. Erst danach darf ein Claim in Seminar, Paper, Vortrag oder öffentliche Materialien wandern.",
    output: "Artefakt: Freigabe, Rückstufung oder neue Recherche"
  }
};

const steps = document.querySelectorAll("[data-step]");
const title = document.querySelector("#step-title");
const body = document.querySelector("#step-body");
const output = document.querySelector("#step-output");

steps.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.step;
    const content = stepContent[key];
    if (!content) return;

    steps.forEach((step) => {
      step.classList.remove("active");
      step.setAttribute("aria-selected", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    title.textContent = content.title;
    body.textContent = content.body;
    output.textContent = content.output;
  });
});

const copyButton = document.querySelector("[data-copy]");
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const text = document.querySelector(".prompt-box code")?.textContent || "";
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Kopiert";
      window.setTimeout(() => {
        copyButton.textContent = "Prompt kopieren";
      }, 1600);
    } catch {
      copyButton.textContent = "Manuell markieren";
    }
  });
}
