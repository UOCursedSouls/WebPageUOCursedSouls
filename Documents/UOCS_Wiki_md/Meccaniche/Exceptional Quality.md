# ⭐ Exceptional Quality
*Come funziona la qualita Exceptional sulle armature di Cursed Souls*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Come Funziona](#come-funziona)
- [Regola della Priorita](#regola-della-priorita)
- [Esempi Pratici](#esempi-pratici)
- [Materiali e Exceptional](#materiali-e-exceptional)
- [FAQ](#faq)

---

## 📜 Panoramica

In Cursed Souls, craftare un pezzo di armatura con qualita **Exceptional** aggiunge **+1 alla resistenza piu alta del materiale** usato.

Questo e un sistema diverso dal vanilla UO, dove Exceptional distribuiva 14-15 punti random. Il nuovo sistema:
- E **prevedibile** — sai sempre quale resist viene potenziata
- **Incentiva i materiali rari** — Iron exceptional non da alcun bonus
- E **piccolo ma significativo** — +1 alla specialita del materiale

---

## ⚙️ Come Funziona

Quando crafti un'armatura Exceptional:

1. Il sistema guarda i **bonus resistenza del materiale** (non le resist base dell'armatura)
2. Trova la **resistenza piu alta** tra i bonus del materiale
3. Aggiunge **+1** a quella resistenza

### Formula

```
Bonus Exceptional = +1 alla resist materiale con valore piu alto
```

Se il materiale non ha bonus (es: Iron, Regular Leather), exceptional **non aggiunge nulla**.

---

## 📊 Regola della Priorita

In caso di **parita** tra due o piu resistenze del materiale, il bonus va alla prima in quest'ordine:

1. **Physical** (priorita massima)
2. **Fire**
3. **Cold**
4. **Poison**
5. **Energy** (priorita minima)

Questo ordine riflette l'importanza strategica — Physical e la resistenza piu universale.

---

## 🧮 Esempi Pratici

### Esempio 1: Cobalto (resist piu alta chiara)

Bonus materiale Cobalto: Phys +6, Fire +5, Cold +5, Poison +4, Energy +4

- **Normal**: +6, +5, +5, +4, +4
- **Exceptional**: **+7**, +5, +5, +4, +4

Physical e la piu alta (+6) → riceve il +1.

### Esempio 2: Daemon Leather (parita)

Bonus materiale Daemon: Phys 0, Fire +4, Cold 0, Poison 0, Energy +4

- **Normal**: 0, +4, 0, 0, +4
- **Exceptional**: 0, **+5**, 0, 0, +4

Fire e Energy sono in parita (+4), ma Fire ha priorita su Energy → Fire riceve il +1.

### Esempio 3: Agapite (tutte uguali)

Bonus materiale Agapite: Phys +2, Fire +3, Cold +2, Poison +2, Energy +2

- **Normal**: +2, +3, +2, +2, +2
- **Exceptional**: +2, **+4**, +2, +2, +2

Fire e la piu alta (+3) → riceve il +1.

### Esempio 4: Iron (nessun bonus)

Bonus materiale Iron: Phys 0, Fire 0, Cold 0, Poison 0, Energy 0

- **Normal**: 0, 0, 0, 0, 0
- **Exceptional**: 0, 0, 0, 0, 0

**Nessun bonus!** Iron non ha resistenze da potenziare.

### Esempio 5: Calcolo completo — Plate Chest Mytheril Exceptional

```
1. BASE (Plate Chest):     Phys 5, Fire 1, Cold 2, Poison 3, Energy 2
2. MATERIALE (Mytheril):   Phys +5, Fire +3, Cold +3, Poison 0, Energy +3
3. EXCEPTIONAL:            Phys +1 (Physical e il bonus Mytheril piu alto)

RISULTATO FINALE:          Phys 11, Fire 4, Cold 5, Poison 3, Energy 5
                           Armor Rating: 45
                           DEX Malus: -12 (dimezzato a -6 con set completo)
```

### Esempio 6: Confronto Normal vs Exceptional — Wyrm Leather Chest

```
NORMAL:
  Base Leather:  Phys 2, Fire 4, Cold 3, Poison 3, Energy 3
  Wyrm:          Phys +4, Fire +4, Cold +3, Poison 0, Energy 0
  TOTALE:        Phys 6, Fire 8, Cold 6, Poison 3, Energy 3  (26 totali)

EXCEPTIONAL:
  Base Leather:  Phys 2, Fire 4, Cold 3, Poison 3, Energy 3
  Wyrm:          Phys +4, Fire +4, Cold +3, Poison 0, Energy 0
  Exceptional:   Phys +1
  TOTALE:        Phys 7, Fire 8, Cold 6, Poison 3, Energy 3  (27 totali)
```

La differenza e **1 punto** — piccola ma conta quando sei vicino al [resist cap](#sectionWiki/Meccaniche/Armor%20System).

---

## 💎 Materiali e Exceptional

### Minerali che beneficiano di piu dall'Exceptional

| Minerale | Resist potenziata | Valore Exceptional |
|----------|------------------|--------------------|
| **Cobalto** | Physical | 6 → **7** |
| **Dull Copper** | Physical | 6 → **7** |
| **Mytheril** | Physical | 5 → **6** |
| **Black Rock** | Physical | 5 → **6** |
| **Titanio** | Physical | 5 → **6** |
| **Steel** | Physical | 5 → **6** |
| **Demonic** | Fire | 5 → **6** |
| **Shadow Iron** | Energy | 5 → **6** |
| **Bronze** | Cold | 5 → **6** |
| **Copper** | Poison | 5 → **6** |

### Pelli che beneficiano di piu dall'Exceptional

| Pelle | Resist potenziata | Valore Exceptional |
|-------|------------------|--------------------|
| **Spined** | Physical | 5 → **6** |
| **Cyclop** | Physical | 5 → **6** |
| **Serpent** | Poison | 5 → **6** |
| **Balron** | Fire | 5 → **6** |
| **Dragon** | Fire | 5 → **6** |

### Materiali senza beneficio Exceptional

| Materiale | Motivo |
|-----------|--------|
| **Iron** | Nessun bonus resist |
| **Regular Leather** | Nessun bonus resist |

---

## ❓ FAQ

**D: Exceptional e garantito quando crafto?**
R: No. La probabilita di craftare Exceptional dipende dal tuo livello nella skill di crafting (Blacksmithy, Tailoring). Piu alta la skill, piu probabilita.

**D: Posso avere Exceptional su Bone Armor?**
R: Le Bone Armor hanno resistenze fisse e non usano materiali. Exceptional non aggiunge bonus resist poiche non c'e un materiale da potenziare.

**D: L'Exceptional funziona sulle Dragon Scale?**
R: Le Dragon Scale usano un sistema a colori separato. L'Exceptional aggiunge +1 alla resist piu alta del colore scelto (es: Red Scale +10 Fire → +11 Fire Exceptional).

**D: Posso applicare Exceptional a un'armatura gia craftata?**
R: No. La qualita viene determinata al momento del crafting e non puo essere cambiata dopo.

**D: Il bonus Exceptional conta per il resist cap?**
R: Si. Tutte le resistenze, incluso il bonus Exceptional, sono soggette al [cap di 70% singola e 250% totale](#sectionWiki/Meccaniche/Armor%20System).

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Armor System](#sectionWiki/Meccaniche/Armor%20System) | [Armor Materials - Minerals](#sectionWiki/Meccaniche/Armor%20Materials%20-%20Minerals) | [Armor Materials - Leathers](#sectionWiki/Meccaniche/Armor%20Materials%20-%20Leathers)*
