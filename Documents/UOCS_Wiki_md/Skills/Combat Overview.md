# ⚔️ Combat Overview — Cursed Souls
*Padroneggia le arti della guerra per sopravvivere nelle terre maledette*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Combattimento Melee](#combattimento-melee)
- [Combattimento Ranged](#combattimento-ranged)
- [Combattimento Magico](#combattimento-magico)
- [Il Moltiplicatore x1.2 in Combattimento](#il-moltiplicatore-x12-in-combattimento)
- [Come le Stats Influenzano il Combattimento](#come-le-stats-influenzano-il-combattimento)
- [Formula HP](#formula-hp)
- [Passive Razziali in Combattimento](#passive-razziali-in-combattimento)
- [FAQ](#faq)

---

## 📜 Panoramica

Il combattimento su Cursed Souls segue le meccaniche classiche di Ultima Online, potenziate dal **moltiplicatore x1.2** su tutte le skill. Questo rende ogni combattente piu efficace rispetto a un server vanilla: hit rate piu alti, danni maggiori, spell piu potenti.

Il sistema di combattimento si divide in tre categorie principali: **melee** (corpo a corpo), **ranged** (distanza) e **magic** (magia). Ogni stile ha i suoi vantaggi e svantaggi, e la scelta della **razza** influenza profondamente quale stile funziona meglio.

---

## ⚔️ Combattimento Melee

Il combattimento corpo a corpo usa armi fisiche ed e il metodo piu diretto per infliggere danni.

### Skill di Combattimento Melee

| Skill | Armi associate | Stat primaria |
|-------|---------------|--------------|
| **Swordsmanship** | Spade, asce, alabarde | STR |
| **Mace Fighting** | Mazze, martelli, bastoni | STR |
| **Fencing** | Spade corte, pugnali, lance | DEX |
| **Wrestling** | Mani nude (anche per resistere in PvP) | STR |

### Skill di Supporto Melee

| Skill | Funzione |
|-------|---------|
| **Tactics** | Aumenta il danno melee. Fondamentale per ogni guerriero |
| **Anatomy** | Aumenta il danno e permette di usare bendaggi (Healing) |
| **Healing** | Cura con bendaggi. Richiede Anatomy per funzionare |
| **Parrying** | Blocca colpi nemici con scudo o arma a due mani |
| **Magic Resistance** | Riduce il danno e gli effetti delle spell nemiche |

### Come funziona un attacco melee:

1. **Hit Check** — Il sistema calcola se colpisci il bersaglio (basato sulla tua weapon skill vs la difesa del nemico)
2. **Danno Base** — Determinato dall'arma e dalla STR
3. **Bonus Tactics** — Tactics aumenta il danno finale
4. **Bonus Anatomy** — Anatomy aggiunge danno bonus
5. **Resistenze** — Il danno viene ridotto dalle resistenze dell'avversario

---

## 🏹 Combattimento Ranged

Il combattimento a distanza permette di colpire i nemici senza essere in mischia.

### Skill per il Ranged

| Skill | Funzione |
|-------|---------|
| **Archery** | Skill principale per archi e balestre |
| **Tactics** | Aumenta il danno delle frecce |
| **Anatomy** | Aumenta il danno aggiuntivo |
| **Healing** | Cura tra un combattimento e l'altro |

### Armi Ranged

- **Archi** — Danno medio, velocita media, richiedono frecce
- **Balestre** — Danno alto, velocita bassa, richiedono dardi

### Vantaggi del Ranged:
- Puoi colpire a distanza, mantenendo la sicurezza
- Combinabile con **Hiding/Stealth** per attacchi furtivi
- L'**Elf** e la razza ideale grazie al DEX cap 140 (massima stamina e velocita d'attacco)

---

## 🔮 Combattimento Magico

La magia e il metodo di combattimento piu versatile, con spell offensive, difensive e di utilita.

### Skill per il Mago

| Skill | Funzione |
|-------|---------|
| **Magery** | Skill principale per castare spell |
| **Evaluate Intelligence** | Aumenta il danno delle spell offensive |
| **Meditation** | Rigenera mana piu velocemente |
| **Magic Resistance** | Resiste alle spell nemiche |
| **Inscription** | Scrivere scroll, bonus al danno magico |

### Cerchi di Magia

| Cerchio | Spell esempio | Mana cost | Potenza |
|---------|-------------|-----------|---------|
| 1-3 | Magic Arrow, Fireball | Basso | Debole |
| 4-5 | Lightning, Greater Heal | Medio | Medio |
| 6 | Energy Bolt, Explosion | Alto | Forte |
| 7 | Flamestrike, Chain Lightning | Molto alto | Molto forte |
| 8 | Resurrection, Earthquake | Altissimo | Devastante |

### Il vantaggio del x1.2 sulla Magia:

A **100.0 Magery** (effettiva 120.0), le spell di **Circle 8 non fizzlano MAI**. Su un server vanilla servirebbe 120.0 (PowerScroll Legendary) per lo stesso risultato.

### Razze ideali per la magia:
- **Dark Elf** — INT cap 160, passiva FastCast +2
- **Demon** — INT cap 140, passiva Infernal Presence (mostri non aggrano)

---

## ⚡ Il Moltiplicatore x1.2 in Combattimento

Il bonus x1.2 rende ogni combattente significativamente piu forte:

| Ambito | A 100.0 (Cursed Souls) | A 100.0 (Vanilla) |
|--------|----------------------|-------------------|
| **Hit chance** | Come 120 Weapon Skill | Come 100 Weapon Skill |
| **Danno melee** | Come 120 Tactics | Come 100 Tactics |
| **Parry chance** | Come 120 Parrying | Come 100 Parrying |
| **Danno magico** | Come 120 Eval Int | Come 100 Eval Int |
| **Fizzle rate** | 0% su Circle 8 | ~17% su Circle 8 |
| **Cura bendaggi** | Come 120 Healing | Come 100 Healing |

> 💡 Il bonus e proporzionale: una skill a 50.0 funziona come 60.0, una a 80.0 come 96.0.

---

## 💪 Come le Stats Influenzano il Combattimento

Le tre stats principali hanno ruoli specifici in combattimento:

### STR (Forza)
- **Danno melee** — STR aumenta il danno base delle armi
- **HP** — Piu STR = piu punti vita (formula sotto)
- **Peso trasportabile** — Armature pesanti richiedono STR
- **Razze forti**: Orc (160), Dwarf (145), Gargoyle (135)

### DEX (Destrezza)
- **Velocita d'attacco** — Piu DEX = attacchi piu rapidi
- **Stamina** — Necessaria per colpire. Senza stamina, non attacchi
- **Velocita di cura** — DEX influenza la velocita dei bendaggi
- **Razze agili**: Elf (140), Vampire (135), Human (115)

### INT (Intelligenza)
- **Mana** — Piu INT = piu mana per le spell
- **Danno magico** — INT influenza il danno delle spell (tramite Eval Int)
- **Mana regeneration** — INT base influenza la rigenerazione
- **Razze intelligenti**: Dark Elf (160), Demon (140), Elf (130)

---

## ❤️ Formula HP

La formula per calcolare i punti vita massimi e:

> **HP = 70 + (STR / 2)**

| Razza | STR cap | HP massimi |
|-------|---------|-----------|
| 💪 **Orc** | 160 | **150** |
| ⛏️ **Dwarf** | 145 | **142** |
| 🗿 **Gargoyle** | 135 | **137** |
| 😈 **Demon** | 125 | **132** |
| 🧑 **Human** | 115 | **127** |
| 🧛 **Vampire** | 105 | **122** |
| 🌙 **Dark Elf** | 95 | **117** |
| 🧝 **Elf** | 85 | **112** |

> ⚠️ I bonus STR da equipaggiamento e buff si sommano oltre il cap base! Un Orc con +15 STR da equip avrebbe 175 STR totale = 157 HP.

---

## 🛡️ Passive Razziali in Combattimento

Alcune passive razziali hanno un impatto diretto sul combattimento:

### 💪 Orc — Brute Force
**Effetto**: Immune a Paralyze (spell e field)
**Condizione**: STR totale >= 170 (cap base 160, serve +10 da equip)
**Impatto**: Non puoi essere fermato in combattimento. Devastante in PvP contro i magi.

### 🗿 Gargoyle — Stone Skin
**Effetto**: Physical Resist +15
**Condizione**: HP < 40%
**Impatto**: Quando sei in pericolo, diventi molto piu resistente ai danni fisici. Ti salva nei momenti critici.

### 🌙 Dark Elf — Arcane Mastery
**Effetto**: Faster Casting +2
**Condizione**: INT totale >= 170 (cap base 160, serve +10 da equip)
**Impatto**: Casti spell significativamente piu veloci. Dominante nel combattimento magico.

### 🧛 Vampire — Blood Feast
**Effetto**: HP Regen +10 per 5 secondi
**Condizione**: Carve di un cadavere umanoide
**Impatto**: Rigenerazione massiccia dopo aver ucciso un nemico. Perfetto per combattimenti consecutivi.

### 🧝 Elf — Elven Meditation
**Effetto**: Mana Regeneration +3
**Condizione**: Mana < 30%
**Impatto**: Recuperi mana piu velocemente quando sei quasi a secco. Utile per magi hybrid.

### 😈 Demon — Infernal Presence
**Effetto**: I mostri non ti aggrano
**Condizione**: Essere Murderer (nome rosso)
**Impatto**: Puoi attraversare dungeon senza essere attaccato. Non funziona in PvP.

### 🧑 Human — Versatility
**Effetto**: Skill cap 750 (invece di 700)
**Condizione**: Sempre attiva
**Impatto**: Puoi avere una skill extra a 50.0, ad esempio Magic Resist su una build warrior.

### ⛏️ Dwarf — Mastersmith
**Effetto**: +10% exceptional su craft
**Condizione**: Sempre attiva
**Impatto**: Non direttamente combattivo, ma permette di craftare equipaggiamento migliore.

---

## ❓ FAQ

**D: Qual e la razza migliore per il combattimento melee?**
R: L'**Orc** per il danno puro (STR 160, anti-paralyze) o il **Gargoyle** per la resistenza (STR 135, Stone Skin quando ferito).

**D: Qual e la razza migliore per la magia?**
R: Il **Dark Elf** per il casting puro (INT 160, FastCast +2) o il **Demon** per un mago-tank (INT 140, STR 125, mostri non aggrano).

**D: Wrestling serve anche ai non-guerrieri?**
R: Si! Wrestling determina la tua capacita di resistere ai colpi in mischia quando non hai un'arma. Utile per i magi in PvP.

**D: Come funziona il Parrying?**
R: Con uno scudo, Parrying blocca una percentuale di colpi. Con arma a due mani, funziona ma con una penalita. A 100.0 (effettiva 120.0) hai un'ottima chance di blocco.

**D: Il danno magico scala con INT?**
R: Il danno delle spell scala con **Evaluate Intelligence**, non direttamente con INT. Pero INT determina il tuo mana pool, quindi quante spell puoi castare.

**D: Posso essere sia guerriero che mago?**
R: Si, ma con 700 skill cap (750 per Human) devi fare compromessi. Un ibrido tipico sacrifica Parrying o Meditation per avere sia combat che magic.

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Skills Overview](#sectionWiki/Skills/Skills%20Overview) | [Razze](#sectionWiki/Razze/Races) | [Crafting Overview](#sectionWiki/Skills/Crafting%20Overview)*
