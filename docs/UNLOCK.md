Neue Informationen auf Seite 2 datasheet

Hier sehe ich genau eine Information, die Droidex meines Wissens nach noch nicht speichert:
Unlocks
Nach bestimmten Rebirths werden freigeschaltet:
Worker Slot
Astromech Slot
Battle Slot
Lounge Slot
und später
NONE
Das ist bisher eher UI-Wissen bzw. implizit vorhanden, aber nicht Bestandteil der Rebirth-Daten.
Architektonische Idee
Ich würde diese Information nicht hart im UI codieren, sondern direkt an jeden Rebirth hängen.
Beispielsweise:
{
level: 6,
credits: 14500000,
unlock: 'WORKER_SLOT',
...
}
oder allgemeiner:
unlock?: 'WORKER_SLOT'
| 'ASTROMECH_SLOT'
| 'BATTLE_SLOT'
| 'LOUNGE_SLOT';
Das gefällt mir deutlich besser, weil dann:
RebirthPanel automatisch anzeigen kann
Companion später darauf zugreifen kann
Tooltips daraus entstehen können
Export/Import vollständig bleibt
ohne irgendwelche Sonderfälle.

Eine Beobachtung noch: Die Spalte heißt allgemein "Unlocks". Das ist für Phase 4 ein Hinweis, dass wir das Feld vielleicht gar nicht slotUnlock nennen sollten, sondern einfach unlock. Dann könnten dort später auch Nova-, Cosmetic- oder andere Freischaltungen stehen, ohne das Modell erneut ändern zu müssen. Das wirkt für die kommende Nova-Integration wesentlich zukunftssicherer.
