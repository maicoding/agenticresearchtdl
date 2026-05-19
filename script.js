const stepContent = {
  frage: {
    title: "Frage klären",
    body: "Der Auftrag legt fest, was recherchiert werden soll, welche Quellen zählen und was ausgeschlossen ist.",
    output: "Artefakt: Research-Auftrag"
  },
  plan: {
    title: "Suchplan bauen",
    body: "Die Frage wird in Teilfragen, Begriffe, Perspektiven und mögliche Gegenpositionen zerlegt.",
    output: "Artefakt: Suchplan"
  },
  quellen: {
    title: "Quellenraum begrenzen",
    body: "Das System arbeitet mit einem festgelegten Korpus. Herkunft, Datum, Quellenart und Nutzungsgrenze werden notiert.",
    output: "Artefakt: Quellenliste mit Status"
  },
  analyse: {
    title: "Befunde extrahieren",
    body: "Kernaussage, Kontext, Methode, Beispiel und möglicher Claim werden getrennt erfasst.",
    output: "Artefakt: Finding-Liste"
  },
  kritik: {
    title: "Kritik prüfen",
    body: "Lücken, schwache Evidenz, Anbieterclaims, Zitationsschleifen und Gegenpositionen werden gesucht.",
    output: "Artefakt: Prüfnotiz"
  },
  synthese: {
    title: "Arbeitsstand schreiben",
    body: "Die Ergebnisse werden zusammengefasst. Quellenbezug, Unsicherheit und offene Prüfschritte bleiben erhalten.",
    output: "Artefakt: Research-Notiz"
  },
  review: {
    title: "Verwendung entscheiden",
    body: "Eine Person prüft, was übernommen, zurückgestellt, genauer gelesen oder verworfen wird.",
    output: "Artefakt: Entscheidungsliste"
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
