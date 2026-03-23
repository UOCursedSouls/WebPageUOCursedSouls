# 🔮 Sistema di Casting

*Seleziona, concentra, scatena*

---

## 📜 Panoramica

Il sistema di casting di UO Cursed Souls funziona in modo diverso dall'Ultima Online tradizionale. Invece di aspettare il tempo di casting e poi selezionare il bersaglio, qui **scegli prima il bersaglio** e poi il tuo personaggio si concentra per lanciare la magia. Questo rende il combattimento magico piu dinamico e strategico.

## 🎯 Come Funziona

Il lancio di una spell segue 4 fasi:

### Fase 1 — Attivazione

Quando clicchi una spell dal tuo spellbook, il gioco controlla:

- Sei vivo e in grado di lanciare magie
- Hai abbastanza **mana** per la spell
- Non sei paralizzato o congelato
- La zona in cui ti trovi permette l'uso di magia

Se tutto e in ordine, si passa alla fase successiva.

### Fase 2 — Selezione del Bersaglio

Appare il **cursore di targeting**: scegli chi o cosa vuoi colpire (o curare). Hai **30 secondi** per selezionare il bersaglio. Se non selezioni nulla entro il tempo, la spell viene annullata senza costi.

### Fase 3 — Concentrazione (Cast Delay)

Dopo aver selezionato il bersaglio, il tuo personaggio inizia a concentrarsi:

- Pronuncia il **mantra** della spell
- Le mani mostrano l'**animazione** di casting
- Il tempo di concentrazione dipende dal **cerchio** della spell e dal tuo **Faster Casting**

**Puoi muoverti liberamente** durante questa fase — non sei bloccato come nel casting tradizionale.

#### Tempo di Casting

Il tempo base dipende dal cerchio della spell:

| Cerchio | Tempo Base | Con FC +2 |
|---------|-----------|-----------|
| 1° | 1.00s | 0.50s |
| 2° | 1.25s | 0.75s |
| 3° | 1.50s | 1.00s |
| 4° | 1.75s | 1.25s |
| 5° | 2.00s | 1.50s |
| 6° | 2.25s | 1.75s |
| 7° | 2.50s | 2.00s |
| 8° | 2.75s | 2.25s |

**Faster Casting (FC)**: ogni punto di FC riduce il tempo di 0.25 secondi. Il cap per Magery e Necromancy e FC +2.

### Fase 4 — Esecuzione

Quando la concentrazione e completa, il gioco verifica che il bersaglio sia ancora valido:

- E ancora vivo?
- E ancora nel raggio della spell?
- Lo puoi ancora vedere (linea di vista)?

Se **tutto e valido**: la spell colpisce e l'effetto viene applicato. Mana e reagenti vengono consumati.

Se il **bersaglio non e piu valido**: la spell fizza (fallisce). Perdi il **50% del mana** della spell e i **reagenti** vengono consumati.

**Nessun cooldown**: dopo aver lanciato una spell, puoi immediatamente lanciarne un'altra.

---

## ⚡ Interruzione (Fizzle)

Durante la fase di concentrazione, diversi eventi possono far fallire la tua spell:

### Danno Fisico

Se ricevi un **colpo fisico** (spada, freccia, mazza, ecc.) durante il casting, la spell **fizza sempre**. Non c'e modo di evitarlo — nemmeno la spell Protection ti aiuta contro i danni fisici.

- **Mana perso**: 100% del costo della spell
- **Protection**: non ha effetto

### Danno Non-Fisico

Se ricevi **danno magico** (fuoco, freddo, veleno, energia) durante il casting, la spell **puo** fizzare, ma la spell **Protection riduce la probabilita** di fizzle.

- **Mana perso**: 100% del costo della spell
- **Protection**: riduce la chance di fizzle

### Annullamento Volontario

Puoi **annullare volontariamente** la spell durante il casting in due modi:

1. **Premendo TAB** (toggle War/Peace mode)
2. **Lanciando un'altra spell** prima che il casting finisca

L'annullamento volontario e meno costoso di un fizzle da danno:

- **Mana perso**: 50% del costo della spell
- **Reagenti**: non vengono consumati

### Tabella Riassuntiva

| Causa | Mana Perso | Reagenti Persi | Protection Aiuta? |
|-------|-----------|----------------|-------------------|
| Danno fisico | 100% | No | No — fizzle garantito |
| Danno non-fisico | 100% | No | Si — riduce la chance |
| TAB / nuova spell | 50% | No | — |
| Target non valido | 50% | Si | — |

> Ogni fizzle produce un **effetto visivo** sopra la testa del caster e un **suono** caratteristico, cosi sia tu che i tuoi avversari saprete che la spell e fallita.

---

## 🛡️ Il Ruolo di Protection

La spell **Protection** (Secondo Cerchio di Magery) ha un ruolo specifico in questo sistema:

- **Non protegge** dai danni fisici — un colpo di spada interrompe sempre il casting
- **Protegge** dai danni magici — riduce la probabilita che una spell nemica interrompa il tuo casting
- **Penalita**: Protection riduce il tuo Faster Casting di 2 punti

Questo crea una scelta strategica: Protection ti rende piu sicuro contro i caster nemici, ma rallenta il tuo casting. Contro i guerrieri in mischia, Protection non ti aiuta.

---

## ⚔️ Strategie di Combattimento

### Per i Caster

- **Mantieni la distanza** dai guerrieri — i loro colpi fisici interrompono sempre le tue spell
- Usa **Protection** quando combatti contro altri caster per resistere ai loro tentativi di interruzione
- Sfrutta la **mobilita** — puoi muoverti durante il casting, quindi non restare fermo
- Se sei sotto pressione, **annulla la spell con TAB** per perdere solo il 50% del mana invece del 100%
- Nessun cooldown tra le spell: puoi **lanciare spell in rapida successione** se non vieni interrotto

### Per i Guerrieri

- **Resta in mischia** con i caster — ogni colpo fisico interrompe le loro spell garantito
- I caster devono scegliere se scappare o rischiare di perdere mana
- Protection non li aiuta contro di te — solo contro altri caster

### Per gli Arcieri

- I tuoi danni sono **fisici** — le frecce interrompono il casting come le spade
- Puoi interrompere i caster **a distanza** senza doverti avvicinare
- Sei il counter naturale dei caster che cercano di mantenere la distanza

---

## 💡 Consigli

- Impara a riconoscere il **suono del fizzle** — ti dice che il tuo avversario ha fallito una spell
- Se un nemico sta castando, un singolo **colpo fisico** e sufficiente per interromperlo
- Non sprecare mana se sei sotto pressione — meglio **annullare con TAB** e perdere il 50% che subire un fizzle da 100%
- Il **Faster Casting** e fondamentale — meno tempo passi a castare, meno possibilita hai di essere interrotto
- Come **Dark Elf** con INT >= 170, ottieni **+2 FC bonus** razziale — il casting piu veloce del gioco

---

## ❓ FAQ

**D: Posso muovermi mentre casto?**
R: Si! A differenza dell'UO tradizionale, puoi muoverti liberamente durante il casting. Non sei bloccato in nessun momento.

**D: Come annullo una spell che sto castando?**
R: Premi TAB (toggle War/Peace) oppure lancia un'altra spell. Perdi il 50% del mana della spell annullata.

**D: Il danno da veleno (Poison) interrompe il casting?**
R: Il danno da Poison e danno non-fisico, quindi puo interrompere il casting ma Protection riduce la probabilita. Non e un fizzle garantito come il danno fisico.

**D: C'e un cooldown tra una spell e l'altra?**
R: No. Puoi lanciare spell una dopo l'altra senza aspettare. L'unico limite e il mana e il cast delay della spell successiva.

**D: Protection vale la pena?**
R: Dipende dal nemico. Contro guerrieri e arcieri (danno fisico), Protection non aiuta e ti rallenta il casting (-2 FC). Contro altri caster, puo salvarti spell importanti. Valuta la situazione.

**D: Se il mio bersaglio si muove fuori range durante il casting?**
R: Quando il cast delay finisce, il gioco controlla se il bersaglio e ancora nel range e nella linea di vista. Se non lo e, la spell fizza — perdi il 50% del mana e i reagenti.

---

*Ultimo aggiornamento: Marzo 2026*
