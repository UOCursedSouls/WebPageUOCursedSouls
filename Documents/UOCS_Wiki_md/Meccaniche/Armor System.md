# 🛡️ Armor System
*Guida completa al sistema armature di Cursed Souls*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Tipi di Armatura](#tipi-di-armatura)
- [Slot e Scaling](#slot-e-scaling)
- [Malus DEX — Armature Pesanti](#malus-dex)
- [Resistance Cap](#resistance-cap)
- [Come si Calcolano le Resistenze](#come-si-calcolano-le-resistenze)
- [Pagine Correlate](#pagine-correlate)

---

## 📜 Panoramica

Il sistema armature di Cursed Souls si basa su **3 layer di protezione** che si sommano:

1. **Resistenze base del tipo di armatura** — ogni tipo (leather, plate, chain, ecc.) ha valori fissi con pro e contro
2. **Bonus del materiale** — il minerale o la pelle usata nel crafting aggiunge resistenze specifiche
3. **Bonus qualita** — craftare [Exceptional](#sectionWiki/Meccaniche/Exceptional%20Quality) aggiunge +1 alla resist materiale piu alta

Le armature possono dare solo: **Armor Rating** (protezione fisica base) + **5 Resistenze elementali** (Physical, Fire, Cold, Poison, Energy).

> 💡 Equipaggiare un **set completo** (6 pezzi dello stesso materiale) attiva una **passiva bonus** unica per quel materiale! Vedi [Minerali](#sectionWiki/Meccaniche/Armor%20Materials%20-%20Minerals) e [Pelli](#sectionWiki/Meccaniche/Armor%20Materials%20-%20Leathers) per i dettagli.

---

## ⚔️ Tipi di Armatura

Cursed Souls ha **8 tipi di armatura**, ognuno con un profilo unico di protezione.

### Tabella comparativa

| Tipo | Armor Base | Phys | Fire | Cold | Poison | Energy | Meditation | DEX Malus Set |
|------|-----------|------|------|------|--------|--------|------------|---------------|
| **Cloth** | 3 | 1 | 1 | 1 | 1 | 1 | Full | 0 |
| **Leather** | 13 | 2 | 4 | 3 | 3 | 3 | Full | 0 |
| **Studded** | 22 | 2 | 4 | 3 | 3 | 4 | Half | 0 |
| **Bone** | 25 | 3 | 3 | 4 | 4 | 2 | None | -7 |
| **Ringmail** | 30 | 3 | 1 | 3 | 5 | 3 | None | -11 |
| **Chainmail** | 35 | 4 | 2 | 2 | 3 | 4 | None | -17 |
| **Plate** | 45 | 5 | 1 | 2 | 3 | 2 | None | -33 |
| **Dragon Scale** | 40 | 3 | 5 | 3 | 3 | 3 | None | — |

> Le resistenze base sono per il **busto** (Chest). Gli altri pezzi scalano in base allo [slot](#slot-e-scaling).

### Dettaglio Pro/Contro

#### Cloth — L'archetipo del mago
- **Pro**: Meditazione piena, nessun malus DEX, peso minimo
- **Contro**: Armor quasi inesistente, resistenze minime
- **Ideale per**: Mago puro che vuole massima rigenerazione mana

#### Leather — L'archetipo dello scout
- **Pro**: Meditazione piena, buone resistenze elementali (Fire forte), leggera
- **Contro**: Armor rating bassa, Physical debole
- **Ideale per**: Ladro, scout, arciere, chi ha bisogno di mobilita e casting

#### Studded Leather — L'archetipo ibrido
- **Pro**: Buon compromesso tra protezione e mobilita, resistenze discrete
- **Contro**: Meditazione dimezzata, non eccelle in nulla
- **Ideale per**: Guerriero/caster ibrido, bardo

#### Bone — L'archetipo del necromante
- **Pro**: Resist Cold e Poison elevate, aspetto unico
- **Contro**: No meditazione, Energy debole, -7 DEX set completo
- **Ideale per**: Necromante, personaggi tribali. **Resist fisse** — non beneficia dei bonus materiale!

#### Ringmail — L'archetipo del ranger pesante
- **Pro**: Resist Poison eccellente, buona Physical
- **Contro**: Fire molto debole, no meditazione, -11 DEX set completo
- **Ideale per**: Ranger pesante, combattente anti-veleno

#### Chainmail — L'archetipo del soldato
- **Pro**: Physical e Energy buone, Armor solida
- **Contro**: Fire e Cold deboli, -17 DEX set completo
- **Ideale per**: Soldato, combattente corpo a corpo bilanciato

#### Plate — L'archetipo del cavaliere
- **Pro**: Massima Armor rating, Physical eccellente
- **Contro**: Resist elementali basse (Fire e il punto debole), -33 DEX set completo
- **Ideale per**: Cavaliere puro tank, chi vuole massima protezione fisica

#### Dragon Scale — L'archetipo dell'elite
- **Pro**: Resist Fire eccezionale, buona Armor
- **Contro**: Difficile da ottenere, pesante
- **Vedi**: [Dragon Scale Armor](#sectionWiki/Meccaniche/Dragon%20Scale%20Armor) per i 6 colori e i loro malus

---

## 📐 Slot e Scaling

Ogni pezzo di armatura copre una parte del corpo diversa. I pezzi piu grandi danno piu protezione.

| Slot | Scalare | Descrizione |
|------|---------|-------------|
| **Chest** (busto) | 35% | Massima protezione — il pezzo piu importante |
| **Legs** (gambe) | 22% | Alta protezione |
| **Arms** (braccia) | 15% | Media protezione |
| **Helmet** (elmo) | 14% | Media protezione |
| **Gloves** (guanti) | 7% | Minima protezione |
| **Gorget** (gorgiera) | 7% | Minima protezione |

> 💡 Il busto da **5 volte** la protezione dei guanti. Investi sempre nei pezzi migliori per busto e gambe!

---

## 💪 Malus DEX — Armature Pesanti

Le armature pesanti impongono un **malus alla Dexterity** quando indossate. La DEX influenza la velocita di attacco, il danno da arco e la capacita di schivare.

### Malus DEX per slot

| Slot | Plate | Chain | Ring | Bone | Studded | Leather | Cloth |
|------|-------|-------|------|------|---------|---------|-------|
| **Chest** | -12 | -6 | -4 | -3 | 0 | 0 | 0 |
| **Legs** | -10 | -5 | -3 | -2 | 0 | 0 | 0 |
| **Arms** | -3 | -2 | -1 | -1 | 0 | 0 | 0 |
| **Helmet** | -3 | -2 | -1 | -1 | 0 | 0 | 0 |
| **Gloves** | -3 | -1 | -1 | 0 | 0 | 0 | 0 |
| **Gorget** | -2 | -1 | -1 | 0 | 0 | 0 | 0 |
| **TOTALE** | **-33** | **-17** | **-11** | **-7** | **0** | **0** | **0** |

### Eccezione: Mytheril

Il **Mytheril** e noto nella mitologia per essere una lega ultraleggera. Quando indossi un **set completo di Mytheril** (6 pezzi), il malus DEX viene **dimezzato**.

Esempio: Plate Mytheril set completo = -16 DEX invece di -33.

> ⚠️ La riduzione si applica solo con il set completo. Un singolo pezzo di Mytheril ha il malus pieno del tipo di armatura.

---

## 🔒 Resistance Cap

Per bilanciare il gioco, le resistenze hanno dei limiti:

| Cap | Valore |
|-----|--------|
| **Singola resistenza max** | 70% |
| **Totale resistenze max** (somma delle 5) | 250% |

La media massima e **50% per resistenza**. Questo significa che non puoi avere tutte le resistenze al massimo — devi fare scelte strategiche.

> 💡 Se superi il cap totale di 250%, il sistema riduce proporzionalmente le resistenze piu alte. Scegli bene quali resistenze prioritizzare!

---

## 🧮 Come si Calcolano le Resistenze

La formula finale per ogni resistenza e:

```
Resistenza Finale = Base Tipo Armatura + Bonus Materiale + Bonus Exceptional
```

### Esempio: Plate Chest in Mytheril Exceptional

```
BASE (Plate Chest):      Phys 5, Fire 1, Cold 2, Poison 3, Energy 2
MATERIALE (Mytheril):    Phys +5, Fire +3, Cold +3, Poison 0, Energy +3
EXCEPTIONAL (+1 top):    Phys +1 (Physical e la resist piu alta del Mytheril)

TOTALE:                  Phys 11, Fire 4, Cold 5, Poison 3, Energy 5
                         Armor Rating: 45
                         DEX Malus: -12 (o -6 con set completo Mytheril)
```

### Confronto: Leather Chest in Wyrm Exceptional

```
BASE (Leather Chest):    Phys 2, Fire 4, Cold 3, Poison 3, Energy 3
MATERIALE (Wyrm):        Phys +4, Fire +4, Cold +3, Poison 0, Energy 0
EXCEPTIONAL (+1 top):    Phys +1 (parita Phys/Fire, Physical vince per ordine)

TOTALE:                  Phys 7, Fire 8, Cold 6, Poison 3, Energy 3
                         Armor Rating: 13
                         DEX Malus: 0
                         + Meditazione piena!
```

**Il trade-off**: Plate ha +32 Armor e +4 Physical, ma -12 DEX e no meditazione. Leather ha meditazione piena, zero DEX malus, e Fire superiore.

---

## 📚 Pagine Correlate

- [Armor Materials - Minerals](#sectionWiki/Meccaniche/Armor%20Materials%20-%20Minerals) — 21 minerali con bonus e passiva set
- [Armor Materials - Leathers](#sectionWiki/Meccaniche/Armor%20Materials%20-%20Leathers) — 15 pelli con bonus e passiva set
- [Dragon Scale Armor](#sectionWiki/Meccaniche/Dragon%20Scale%20Armor) — 6 colori con bonus/malus
- [Exceptional Quality](#sectionWiki/Meccaniche/Exceptional%20Quality) — Come funziona la qualita exceptional

---

*Ultimo aggiornamento: Marzo 2026*
