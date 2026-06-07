const stepContent = {
  frage: {
    title: "Frage klären",
    body: "Der Auftrag begrenzt Thema, Korpus, Zielgruppe und Ausschlüsse.",
    output: "Status: scoping"
  },
  quelle: {
    title: "Quelle prüfen",
    body: "Herkunft, Datum, Quellentyp, Primärnähe und Interessenlage werden sichtbar.",
    output: "Status: evidence-linked"
  },
  claim: {
    title: "Claim extrahieren",
    body: "Eine Aussage wird einzeln formuliert und mit Belegstelle, Grenze und Status verbunden.",
    output: "Status: evidence-linked"
  },
  review: {
    title: "Gegenprüfung",
    body: "Gegenbelege, schwache Evidenz, Zitationsschleifen, Vendor Claims und AI Slop werden gesucht.",
    output: "Status: evidence-checked"
  },
  dossier: {
    title: "Dossier aktualisieren",
    body: "Geprüfte Quellen, Claims, Gegenpositionen und offene Fragen werden in das Dossier eingeordnet.",
    output: "Status: pattern-ready"
  },
  output: {
    title: "Output freigeben",
    body: "Ein Text nutzt geprüfte Claims oder markierte Hypothesen.",
    output: "Status: claim-ready"
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
        copyButton.textContent = "Auftrag kopieren";
      }, 1600);
    } catch {
      copyButton.textContent = "Manuell markieren";
    }
  });
}
