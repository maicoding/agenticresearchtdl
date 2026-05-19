const stepContent = {
  frage: {
    title: "Frage klären",
    body: "Die Recherche beginnt mit einer präzisen Arbeitsfrage: Thema, Zielgruppe, Erkenntnisinteresse, Quellenarten und Ausschlusskriterien werden benannt.",
    output: "Output: Research-Auftrag"
  },
  plan: {
    title: "Suchplan bauen",
    body: "Das System zerlegt die Frage in Teilfragen und Suchachsen. Dadurch wird sichtbar, welche Aspekte geprüft werden müssen und welche Quellenarten dafür geeignet sind.",
    output: "Output: Teilfragen und Suchstrategie"
  },
  quellen: {
    title: "Quellenkorpus aufbauen",
    body: "PDFs, Webseiten, Literaturdaten, Notizen oder Kursmaterialien werden nicht nur gesammelt, sondern mit Herkunft, Datum, Quellenart und Nutzungsgrenze erfasst.",
    output: "Output: Quellenkorpus mit Status"
  },
  analyse: {
    title: "Befunde extrahieren",
    body: "Der Analyse-Schritt trennt Kernaussage, Kontext und möglichen Claim. Eine Quelle wird nicht automatisch zur fertigen These.",
    output: "Output: Findings und Claim-Kandidaten"
  },
  kritik: {
    title: "Kritik erzwingen",
    body: "Der Critic-Schritt sucht Lücken, schwache Evidenz, Anbieterclaims, Zitationsschleifen, Gegenpositionen und Stellen, an denen eine Formulierung stärker ist als der Beleg.",
    output: "Output: Risiken, Lücken, Gegenfragen"
  },
  synthese: {
    title: "Arbeitsstand formulieren",
    body: "Die Synthese verdichtet für eine Zielgruppe, bleibt aber als Arbeitsstand markiert. Sie ersetzt weder Originallektüre noch fachliche Entscheidung.",
    output: "Output: Research-Notiz"
  },
  review: {
    title: "Fachlich freigeben",
    body: "Lehrende oder Forschende prüfen Quellen, Grenzen und Relevanz. Erst danach darf ein Claim in Seminar, Paper, Vortrag oder öffentliche Materialien wandern.",
    output: "Output: Freigabe, Rückstufung oder neue Recherche"
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
