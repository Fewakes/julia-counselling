"use client";

import { useState } from "react";
import Link from "next/link";
import type { MarketHomeCopy } from "../content/market-homepages";

type FinderCopy = MarketHomeCopy["finder"];

export default function SupportFinder({ copy, market }: { copy: FinderCopy; market: MarketHomeCopy["market"] }) {
  const [person, setPerson] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const polish = market === "pl";
  const result = person ? copy.resultLinks[person] : undefined;
  const selectedDifficulty = copy.difficulty.find((option) => option.value === difficulty)?.label;

  return <section className="support-finder" aria-labelledby={`${market}-finder-title`}>
    <div className="support-finder-intro"><p className="eyebrow">{polish ? "MAŁY PUNKT ORIENTACYJNY" : "A GENTLE PLACE TO START"}</p><h2 id={`${market}-finder-title`}>{copy.title}</h2><p>{copy.introduction}</p></div>
    <div className="support-finder-choices">
      <fieldset><legend>{copy.forLabel}</legend><div className="finder-options">{copy.person.map((option) => <label className="finder-option" key={option.value}><input type="radio" name={`${market}-finder-person`} value={option.value} checked={person === option.value} onChange={() => setPerson(option.value)} /><span>{option.label}</span></label>)}</div></fieldset>
      <fieldset><legend>{copy.difficultyLabel}</legend><div className="finder-options finder-options-compact">{copy.difficulty.map((option) => <label className="finder-option" key={option.value}><input type="radio" name={`${market}-finder-difficulty`} value={option.value} checked={difficulty === option.value} onChange={() => setDifficulty(option.value)} /><span>{option.label}</span></label>)}</div></fieldset>
    </div>
    <div className="support-finder-result" aria-live="polite" aria-atomic="true">
      {result && selectedDifficulty ? <><p className="eyebrow">{copy.resultLabel}</p><h3>{result.title}</h3><p>{result.detail} {polish ? `Wybrany temat: ${selectedDifficulty.toLowerCase()}.` : `You selected “${selectedDifficulty.toLowerCase()}”.`} {copy.resultDetail}</p><Link className="text-link" href={result.href}>{copy.resultAction}<span aria-hidden="true">→</span></Link></> : <p className="finder-prompt">{polish ? "Wybierz odpowiedzi, a podpowiemy, od której strony możesz zacząć." : "Choose an option in both groups to see a relevant page to explore."}</p>}
    </div>
  </section>;
}
