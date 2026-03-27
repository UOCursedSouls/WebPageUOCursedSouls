# 🏗️ Guida alla Skill Architecture - Ultima Online

## 📋 Indice
- [Introduzione](#introduzione)
- [Descrizione della Skill](#descrizione-della-skill)
- [Meccaniche Base](#meccaniche-base)
- [Training della Skill](#training-della-skill)
- [Skill Secondarie](#skill-secondarie)
- [Oggetti Necessari](#oggetti-necessari)
- [Consigli e Strategie](#consigli-e-strategie)

## 🎯 Introduzione

**Architecture** e una skill unica di Cursed Souls che permette ai giocatori di costruire strutture permanenti all'interno dei territori di gilda. E la skill principale del [Building System](#sectionWiki/Guild%20System/Building%20System).

**Difficolta**: Media-Alta
**Categoria**: Skill di Crafting
**Skill Cap**: 100.0
**Stat Primaria**: Intelligence
**Stat Secondaria**: Strength

## 🔍 Descrizione della Skill

Architecture governa la capacita di un giocatore di costruire strutture nel mondo di gioco. Piu alto e il livello, piu strutture complesse puoi creare e maggiore sara la probabilita di successo nel crafting.

### Benefici Principali:
- **Crafting di strutture** — muri, pavimenti, tetti, mobili, porte e molto altro
- **Probabilita di successo** — piu alta la skill, meno fallimenti
- **Qualita Exceptional** — ad alto livello puoi creare strutture exceptional (+50% durabilita)
- **Manipolazione** — ogni uso del Building Tool da una possibilita di skill gain

## ⚙️ Meccaniche Base

### Probabilita di Successo

La probabilita di craftare con successo uno statico dipende dal tuo livello di Architecture e dalla difficolta della ricetta:

```
Chance = 40% + (Architecture - MinSkill) / (MaxSkill - MinSkill) * 60%
```

| Livello Architecture | Strutture Disponibili |
|---------------------|----------------------|
| **20-30** | Pavimenti semplici, rocce decorative |
| **30-40** | Muri in legno, staccionate, luci |
| **40-50** | Tetti, muri in pietra, scale, mobili |
| **50-60** | Porte in metallo, cancelli |
| **60+** | Tutte le strutture con alta probabilita |

### Qualita del Craft

| Qualita | Effetto sulla Durabilita |
|---------|------------------------|
| **Below Average** | Durabilita ridotta |
| **Normal** | Durabilita standard (100 HP base) |
| **Exceptional** | Durabilita **+50%**, nome del crafter impresso |

## 📈 Training della Skill

Architecture si aumenta in due modi:

### 1. Crafting al Banco da Lavoro
Ogni volta che crafti uno statico al Building Workbench, hai una possibilita di aumentare Architecture. La probabilita di gain e piu alta quando crafti oggetti vicini al tuo livello attuale.

**Percorso consigliato:**

| Livello | Cosa craftare |
|---------|--------------|
| **0-25** | Pavimenti in legno, rocce decorative |
| **25-40** | Muri in legno, staccionate |
| **40-55** | Tetti, muri in pietra, scale |
| **55-70** | Mobili, porte in metallo |
| **70-100** | Cancelli, strutture avanzate |

### 2. Uso del Building Tool
Ogni volta che usi il Building Tool per piazzare, spostare, ruotare o bloccare uno statico, hai una possibilita di aumentare Architecture.

> 💡 Il Building Tool e il modo piu economico per trainare — non costa risorse, solo durabilita del tool!

## 🤝 Skill Secondarie

Architecture lavora in combinazione con altre skill di crafting. Ogni categoria di strutture richiede una skill secondaria specifica:

| Categoria | Skill Secondaria | Materiale |
|-----------|-----------------|-----------|
| **Strutture in legno** | Carpentry | Boards |
| **Strutture in pietra** | Mining | Stone |
| **Porte e cancelli** | Blacksmithy | Iron Ingots |
| **Luci e meccanismi** | Tinkering | Iron Ingots |

> ⚠️ Se non hai abbastanza livello nella skill secondaria, non potrai craftare la struttura anche se Architecture e sufficientemente alta.

### Template consigliato per un Architect:

```
Skill Template:
Architecture    100.0  (principale)
Carpentry        80.0  (strutture in legno)
Mining           80.0  (strutture in pietra)
Blacksmithy      60.0  (porte in metallo)
Tinkering        60.0  (luci e meccanismi)
Lumberjacking    80.0  (raccolta legno)
```

## 🛠️ Oggetti Necessari

Per utilizzare la skill Architecture hai bisogno di due oggetti:

### Building Workbench (Banco da Lavoro)

| Proprieta | Dettaglio |
|-----------|----------|
| **Uso** | Craftare nuovi statici |
| **Durabilita** | ~500 utilizzi |
| **Requisito** | Deve essere a terra, non da mount |
| **Come ottenerlo** | Craftabile con Tinkering o Carpentry |

### Building Tool (Strumento di Costruzione)

| Proprieta | Dettaglio |
|-----------|----------|
| **Uso** | Piazzare, spostare, ruotare, bloccare statici |
| **Durabilita** | ~200 utilizzi |
| **Requisito** | Deve essere nel backpack |
| **Come ottenerlo** | Craftabile con Tinkering |

## 💡 Consigli e Strategie

1. **Inizia con i pavimenti** — sono i piu facili e costano poche risorse
2. **Tieni sempre risorse extra** — i fallimenti consumano materiali
3. **Usa il Building Tool per trainare** — piazza e riprendi lo stesso statico per guadagnare skill senza sprecare risorse
4. **Proteggi le tue costruzioni** — attiva le guardie del territorio e le barriere magiche
5. **Costruisci vicino alla stone** — le strutture al centro del territorio sono piu difficili da raggiungere per i nemici
6. **Investi in materiali migliori** — pietra e metallo hanno piu durabilita del legno

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Building System](#sectionWiki/Guild%20System/Building%20System) | [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone)*
