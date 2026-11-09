# 🔮 Sistema di Casting

*Seleziona, concentra, scatena*

---

## 📜 Panoramica

Il sistema di casting di UO Cursed Souls funziona in modo diverso dall'Ultima Online tradizionale. Invece di aspettare il tempo di casting e poi selezionare il bersaglio, qui **scegli prima il bersaglio** e poi il tuo personaggio si concentra per lanciare la magia. Questo rende il combattimento magico piu dinamico e strategico.

## 🎯 Come Funziona

Il lancio di una spell segue 4 fasi: attivazione, bersaglio, concentrazione, esecuzione. Questo vale per i **giocatori**; i mostri, le guardie e gli altri NPC lanciano con il casting classico di Ultima Online.

### Fase 1 — Attivazione

Quando clicchi una spell dal tuo spellbook, il gioco controlla:

- Sei vivo
- Non sei paralizzato né calmato
- Hai abbastanza **mana** per la spell
- Non stai già concentrandoti su un'altra spell

I reagenti non vengono controllati in questa fase. Se tutto è in ordine, si passa alla fase successiva.

### Fase 2 — Selezione del Bersaglio

Appare subito il **cursore di targeting**: scegli chi o cosa colpire (anche un punto del terreno). Il raggio è quello della spell, o 12 tile se la spell non ne ha uno. Hai **30 secondi** per scegliere. Finché il cursore è aperto la spell **non è ancora in corso**: danni ricevuti e toggle War/Peace non hanno effetto su di essa. Se premi **ESC**, se scade il tempo o se muori, la spell finisce **senza costi, senza suoni e senza messaggi**.

### Fase 3 — Concentrazione (Cast Delay)

Dopo aver scelto il bersaglio, il tuo personaggio inizia a concentrarsi:

- Pronuncia il **mantra** della spell
- Le mani mostrano l'**animazione** di casting (le mani vengono liberate: l'arma impugnata viene tolta)
- Il tempo dipende dal **cerchio** della spell e dal tuo **Faster Casting**

**Puoi muoverti liberamente** durante questa fase — non sei bloccato come nel casting tradizionale.

#### Tempo di Casting

Il tempo è **(3 + cerchio) × 0.25 secondi**, meno 0.25 secondi per ogni punto di Faster Casting:

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

- **Cap FC**: +2 per Magery e Necromancy.
- **Dark Elf** con INT >= 170: **+2 FC** razziale e cap **+4**.
- **Protection**: **-2 FC**.
- Il tempo minimo è **0.25 secondi**.
- Il Faster Cast Recovery non ha effetto.

### Fase 4 — Esecuzione

Quando la concentrazione è completa, il gioco verifica il bersaglio. La linea di vista **non** viene ricontrollata a questo punto.

| Situazione alla fine del cast | Esito | Mana | Reagenti |
|-------------------------------|-------|------|----------|
| Bersaglio valido | La spell colpisce, il danno è istantaneo | 100% | Consumati |
| Bersaglio fuori raggio, morto, eliminato o non visibile | Fizzle | 50% | Persi |
| Prova di skill fallita | Fizzle | Nessuno | Persi |
| Spell su un punto del terreno con un mobile | Colpisce il primo mobile vivo su quel tile (anche nascosto) | 100% | Consumati |
| Spell su un tile vuoto | Si applica l'effetto sul terreno | 100% | Consumati |
| Caster e bersaglio entrambi con Magic Reflection | La spell non ha effetto | 100% | Persi |

**Nessun cooldown**: dopo aver lanciato una spell, puoi immediatamente lanciarne un'altra.

---

## ⚡ Interruzione (Fizzle)

Durante la fase di concentrazione, diversi eventi possono far fallire la tua spell. Ogni fizzle produce particelle sopra la testa del caster, un **suono** e il messaggio "The spell fizzles".

### Danno Fisico

Se ricevi un **colpo fisico** (spada, freccia, mazza, ecc.) durante la concentrazione, la spell **fizza sempre**. Nemmeno Protection aiuta.

- **Mana perso**: 100% del costo della spell

### Danno Non-Fisico

Se ricevi **danno magico** (fuoco, freddo, veleno, energia) durante la concentrazione, la spell **può** fizzare, ma **Protection riduce la probabilità** di fizzle.

- **Mana perso**: 100% del costo della spell

### Toggle War/Peace

Se cambi modalità War/Peace durante la concentrazione, la spell fizza.

- **Mana perso**: 50% del costo della spell

### Morte

Se muori durante la concentrazione la spell si interrompe e non perdi nulla.

### Lanciare un'altra spell (Recast)

Puoi lanciare una nuova spell mentre un'altra è in corso:

- **Il cursore della vecchia spell è ancora aperto** (non hai ancora scelto il bersaglio): la vecchia spell finisce senza costi, animazione, suono o messaggio, e il cursore diventa quello della nuova. Anche una spell senza bersaglio chiude gratis un cursore aperto.
- **La vecchia spell è in concentrazione**: aprire il cursore della nuova non tocca la vecchia. Quando scegli il bersaglio della nuova, la vecchia **fizza** (nessun mana perso per lei) e paghi subito il **50% del mana della NUOVA spell** (arrotondato per difetto); poi parte la concentrazione della nuova, che costa il mana intero quando va a segno.
- **ESC o scadenza** sul cursore della nuova spell: la vecchia continua e va a segno. Se la vecchia finisce di concentrarsi mentre il cursore della nuova è aperto, va a segno, e scegliere poi il bersaglio è un lancio normale senza penalità.
- **Mana insufficiente** per la penalità: la nuova spell fallisce e la vecchia continua.
- **Bacchette** (costo 0 mana): se scegli il bersaglio di una spell da bacchetta mentre un'altra spell è in concentrazione, la vecchia fizza e perdi il **50% del mana della vecchia spell**.

### Tabella Riassuntiva

| Causa | Mana Perso | Protection Aiuta? |
|-------|-----------|-------------------|
| Danno fisico | 100% | No — fizzle garantito |
| Danno non-fisico | 100% | Sì — riduce la chance |
| Toggle War/Peace | 50% | — |
| Nuova spell (bersaglio scelto) | 50% della nuova spell | — |
| Bacchetta durante un'altra spell | 50% della vecchia spell | — |
| Bersaglio non valido a fine cast | 50% | — |
| Prova di skill fallita | Nessuno | — |
| ESC, scadenza o morte con cursore aperto | Nessuno | — |

---

## 🛡️ Il Ruolo di Protection

La spell **Protection** (Secondo Cerchio di Magery) ha un ruolo specifico in questo sistema:

- **Non protegge** dai danni fisici — un colpo di spada interrompe sempre il casting
- **Protegge** dai danni magici — riduce la probabilita che una spell nemica interrompa il tuo casting
- **Penalità**: Protection riduce il tuo Faster Casting di 2 punti

Questo crea una scelta strategica: Protection ti rende piu sicuro contro i caster nemici, ma rallenta il tuo casting. Contro i guerrieri in mischia, Protection non ti aiuta.

---

## ⚔️ Strategie di Combattimento

### Per i Caster

- **Mantieni la distanza** dai guerrieri — i loro colpi fisici interrompono sempre le tue spell
- Usa **Protection** quando combatti contro altri caster per resistere ai loro tentativi di interruzione
- Sfrutta la **mobilita** — puoi muoverti durante il casting, quindi non restare fermo
- Se sei sotto pressione, **cambia modalità War/Peace** per perdere solo il 50% del mana invece del 100%
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
- Non sprecare mana se sei sotto pressione — meglio **annullare con il toggle War/Peace** e perdere il 50% che subire un fizzle da 100%
- Il **Faster Casting** e fondamentale — meno tempo passi a castare, meno possibilita hai di essere interrotto
- Come **Dark Elf** con INT >= 170, ottieni **+2 FC bonus** razziale e il cap sale a +4 — il casting più veloce del gioco

---

## ❓ FAQ

**D: Posso muovermi mentre casto?**
R: Si! A differenza dell'UO tradizionale, puoi muoverti liberamente durante il casting. Non sei bloccato in nessun momento.

**D: Come annullo una spell che sto castando?**
R: Prima di scegliere il bersaglio basta ESC: nessun costo. Durante la concentrazione puoi cambiare modalità War/Peace (perdi il 50% del mana) oppure lanciare un'altra spell (perdi il 50% del mana della nuova).

**D: Il danno da veleno (Poison) interrompe il casting?**
R: Il danno da Poison e danno non-fisico, quindi puo interrompere il casting ma Protection riduce la probabilita. Non e un fizzle garantito come il danno fisico.

**D: C'e un cooldown tra una spell e l'altra?**
R: No. Puoi lanciare spell una dopo l'altra senza aspettare. L'unico limite e il mana e il cast delay della spell successiva.

**D: Protection vale la pena?**
R: Dipende dal nemico. Contro guerrieri e arcieri (danno fisico), Protection non aiuta e ti rallenta il casting (-2 FC). Contro altri caster, puo salvarti spell importanti. Valuta la situazione.

**D: Se il mio bersaglio si muove fuori range durante il casting?**
R: Quando il cast delay finisce, il gioco controlla se il bersaglio è ancora nel raggio, vivo e visibile (la linea di vista non viene ricontrollata). Se non lo è, la spell fizza: perdi il 50% del mana e i reagenti.

---

## 🔗 Vedi anche

- [Magery](#sectionWiki/Skills/Magery)

---

*Ultimo aggiornamento: Novembre 2026*
