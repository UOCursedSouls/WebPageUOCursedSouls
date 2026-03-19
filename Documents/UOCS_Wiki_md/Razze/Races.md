# ⚔️ Razze di Cursed Souls
*Scegli la tua stirpe e scopri il tuo destino*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Sistema Stats](#sistema-stats)
- [Passive Razziali](#passive-razziali)
- [Tabella Razze](#tabella-razze)
- [Builds di Esempio](#builds-di-esempio)
- [Come Cambiare Razza](#come-cambiare-razza)
- [FAQ](#faq)

---

## 📜 Panoramica

Cursed Souls ha **8 razze giocabili**, ognuna con stats diverse, cap individuali e un'**abilita passiva unica** che si attiva in base a condizioni specifiche.

La scelta della razza influenza profondamente il tuo stile di gioco:
- Le stats iniziali e i cap determinano i tuoi limiti
- La passiva razziale ti da un vantaggio unico se costruisci la build giusta
- Ogni razza ha un **punto debole** che devi compensare con l'equipaggiamento

---

## 📊 Sistema Stats

| Parametro | Valore |
|-----------|--------|
| **Stat Cap Totale** | 285 (STR + DEX + INT) |
| **Formula HP** | 70 + (STR / 2) |
| **Formula Mana** | = INT |
| **Formula Stamina** | = DEX |
| **Skill Cap** | 700 (100 per skill), 750 per Umani |

Ogni razza ha **cap individuali per stat** — non puoi superare il cap della tua razza anche se hai punti disponibili nel stat cap totale.

---

## 🛡️ Passive Razziali

| Razza | Passiva | Condizione | Effetto |
|-------|---------|-----------|---------|
| 🧑 **Human** | *Versatility* | Sempre attiva | Skill cap 105 (750 totali) invece di 100 (700) |
| 🧝 **Elf** | *Elven Meditation* | Mana < 30% | Mana Regeneration +3 |
| 🗿 **Gargoyle** | *Stone Skin* | HP < 40% | Physical Resist +15 |
| 🌙 **Dark Elf** | *Arcane Mastery* | INT >= 170 | Faster Casting +2 |
| 💪 **Orc** | *Brute Force* | STR >= 170 | Immune a Paralyze |
| 🧛 **Vampire** | *Blood Feast* | Carve cadavere umano | HP Regen +10 per 5 secondi |
| ⛏️ **Dwarf** | *Mastersmith* | Sempre attiva | +10% chance Exceptional su craft |
| 😈 **Demon** | *Infernal Presence* | Nome rosso (Murderer) | I mostri non ti aggrano |

### Dettagli Passive:

**🧛 Vampire — Blood Feast**
- Devi carvare un cadavere **umanoide** con un coltello
- Puoi mangiare solo se **Hunger < 20** (recuperi fame)
- Puoi bere sangue solo se **Thirst < 20** (recuperi sete)
- Se sei completamente sazio (20/20), non puoi nutrirti
- Attiva un boost di **HP Regeneration +10** per **5 secondi**

**😈 Demon — Infernal Presence**
- Funziona solo se sei **Murderer** (nome rosso)
- I mostri ti ignorano completamente — non ti attaccano
- Se **TU attacchi un mostro**, quello reagira e ti attacchera normalmente
- Perfetto per muoversi in dungeon pericolosi senza combattere

**🌙 Dark Elf — Arcane Mastery**
- L'INT totale conta (base + equipaggiamento + buff)
- Con INT cap a 160, servono almeno **+10 INT da equip** per attivare la passiva
- Il bonus **Faster Casting +2** si somma a quello dell'equipaggiamento (cap FC = 4)

**💪 Orc — Brute Force**
- La STR totale conta (base + equipaggiamento + buff)
- Con STR cap a 160, servono almeno **+10 STR da equip** per attivare la passiva
- Immune a **Paralyze spell** e **Paralyze Field** — non puoi essere fermato

---

## 📊 Tabella Razze Completa

| Razza | STR cap | DEX cap | INT cap | HP max | Mana max | Stam max | Passiva |
|-------|---------|---------|---------|--------|----------|----------|---------|
| 🧑 [**Human**](#sectionWiki/Razze/Human) | 115 | 115 | 115 | 127 | 115 | 115 | Skill cap +5 |
| 🧝 [**Elf**](#sectionWiki/Razze/Elf) | 85 | 140 | 130 | 112 | 130 | 140 | Mana regen basso mana |
| 🗿 [**Gargoyle**](#sectionWiki/Razze/Gargoyle) | 135 | 105 | 95 | 137 | 95 | 105 | Resist quando ferito |
| 🌙 [**Dark Elf**](#sectionWiki/Razze/Dark%20Elf) | 95 | 70 | 160 | 117 | 160 | 70 | FastCast +2 |
| 💪 [**Orc**](#sectionWiki/Razze/Orc) | 160 | 95 | 70 | 150 | 70 | 95 | Anti-paralyze |
| 🧛 [**Vampire**](#sectionWiki/Razze/Vampire) | 105 | 135 | 105 | 122 | 105 | 135 | HP regen da cadaveri |
| ⛏️ [**Dwarf**](#sectionWiki/Razze/Dwarf) | 145 | 85 | 95 | 142 | 95 | 85 | +10% exceptional |
| 😈 [**Demon**](#sectionWiki/Razze/Demon) | 125 | 70 | 140 | 132 | 140 | 70 | Mostri non aggrano |

> 💡 HP calcolati con STR al massimo. Formula: HP = 70 + (STR cap / 2)

---

## 🎮 Builds di Esempio

### Human — Warrior bilanciato
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 115 | 115 | 55 | 127 | 55 | 115 |
*Versatile. Skill cap 105 permette di diversificare le skill.*

### Elf — Archer veloce
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 85 | 140 | 60 | 112 | 60 | 140 |
*Massima stamina per corsa e attacco. Fragile ma sfuggente.*

### Dark Elf — Pure Mage
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 55 | 70 | 160 | 97 | 160 | 70 |
*FastCast attivo a 160 + equip INT. HP bassissimo: glass cannon.*

### Orc — Berserker
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 160 | 95 | 30 | 150 | 30 | 95 |
*Anti-paralyze attivo. Zero magia. Puro tank melee.*

### Vampire — Assassin
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 60 | 135 | 90 | 100 | 90 | 135 |
*Velocissimo. Si rigenera mangiando cadaveri. HP basso.*

### Dwarf — Tank Artigiano
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 145 | 45 | 95 | 142 | 95 | 45 |
*HP altissimi. +10% exceptional sul crafting. Lento.*

### Demon — Dark Knight
| STR | DEX | INT | HP | Mana | Stam |
|-----|-----|-----|----|------|------|
| 125 | 20 | 140 | 132 | 140 | 20 |
*Caster con buon HP. Come murderer i mostri lo ignorano.*

---

## 🔄 Come Cambiare Razza

Per cambiare razza devi usare il **Races Pad**:

1. Il tuo personaggio deve essere un **ghost** (morto)
2. Cammina sopra il **Races Pad**
3. Seleziona la nuova razza
4. Dopo 2.5 secondi di trasformazione, la razza viene applicata
5. Le tue stats vengono resettate ai valori iniziali della nuova razza
6. Il tuo **Stat Cap** viene settato a **285**

> ⚠️ **Attenzione**: Cambiare razza resetta le tue stats! Dovrai riallenarle.

---

## ❓ FAQ

**D: Posso superare il cap individuale di una stat con l'equipaggiamento?**
R: Si! Il cap individuale limita solo la stat **base** (RawStr/RawDex/RawInt). I bonus da equipaggiamento, buff e spell si sommano oltre il cap.

**D: Il Dark Elf puo attivare FastCast con equip INT?**
R: Si. Il cap INT base e 160, ma con +10 INT da equipaggiamento arrivi a 170 totali e la passiva si attiva.

**D: Il Vampire puo mangiare all'infinito?**
R: No. Puoi mangiare solo se Hunger < 20 e bere solo se Thirst < 20. Quando sei sazio (20/20), non puoi nutrirti.

**D: Il Demon deve essere Murderer per la passiva?**
R: Si. Solo con il nome rosso i mostri ti ignorano. Se non sei murderer, la passiva non funziona.

**D: L'Human e debole perche non ha estremi?**
R: L'Human ha lo skill cap piu alto (750 vs 700) — puo imparare 5 punti skill in piu di qualsiasi altra razza. Questo permette build piu versatili.

**D: Le stats iniziali sono fisse?**
R: Si. Quando cambi razza tramite il Races Pad, le stats vengono resettate ai valori iniziali della razza. Dovrai poi allenarle fino ai cap.

---

---

## 🔗 Vedi anche

- [StatCap Progression](#sectionWiki/Guild%20System/StatCap%20Progression) — Come aumentare il tuo StatCap da 255 a 285
- [Skills Overview](#sectionWiki/Skills/Skills%20Overview) — Il sistema skill completo, moltiplicatore x1.2 e build consigliate
- [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) — Il sistema di gilde territoriale

---

*Ultimo aggiornamento: Marzo 2026*
