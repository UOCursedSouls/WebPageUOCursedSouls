# 🧪 Sistema di Tossicità da Pozioni

*Bevi quante ne vuoi, ma il corpo presenta il conto*

---

## 📜 Panoramica

Su **Cursed Souls** le pozioni bevute **non hanno cooldown fissi**. Puoi tracannare Heal, Agility, Strength, Nightsight e le altre bevibili una dietro l'altra senza messaggi del tipo *"You must wait 10 seconds..."*. In cambio, il tuo corpo accumula **tossicità**: un contatore invisibile che sale con ogni sorso e scende lentamente nel tempo.

Quando la tossicità supera certe soglie, il tuo personaggio subisce **effetti collaterali** — nausea, tremori, vomito, allucinazioni, fino all'overdose vero e proprio. L'effetto specifico dipende dal **mix di pozioni** che hai bevuto di recente: un'intossicazione da Heal+Stat è diversa da una da Cure+Night.

> Le pozioni **lanciate** (Explosion, Conflagration, Confusion Blast) mantengono i loro cooldown originali — non si bevono, quindi non contribuiscono alla tossicità.

---

## 🎯 Come Funziona

### Accumulo

Ogni pozione bevuta aggiunge punti alla tua tossicità. Il peso dipende dalla **potenza** (tier) della pozione:

| Tier | Esempio | Tossicità Aggiunta |
|------|---------|-------------------|
| Lesser | Lesser Heal, Lesser Cure | ~13 punti |
| Normal | Heal, Agility, Refresh | ~18 punti |
| Greater | Greater Heal, Greater Agility, Total Refresh | ~27 punti |

Le pozioni più potenti sono **più veloci da accumulare**, ma ti danno anche effetti migliori — scelta strategica.

### Decay

La tossicità cala di **~1 punto al secondo**, continuamente. Non ci sono bonus o malus di decay: bevi, aspetti, torni in salute. Il decay funziona **anche da offline** — se esci dal server con tossicità alta e torni dopo qualche minuto, la trovi già scesa.

### Tag di Categoria

Ogni volta che bevi, il sistema memorizza un **tag** della categoria della pozione. Il tag dura **45 secondi** ed è quello che determina il *tipo* di effetto collaterale quando scatta.

| Tag | Pozioni |
|-----|---------|
| **Heal** | Lesser Heal, Heal, Greater Heal |
| **Stat** | Agility, Greater Agility, Strength, Greater Strength |
| **Cure** | Lesser Cure, Cure, Greater Cure |
| **Refresh** | Refresh, Total Refresh |
| **Night** | Nightsight |
| **Poison** | Lesser Poison, Poison, Greater Poison, Deadly Poison |
| **Clarity** | Clarity Potion (faction) |

Bevendo la stessa categoria più volte, i tag si accumulano — un tag "dominante" (quello con più istanze attive) influisce sul tipo di side effect.

---

## 🌡️ Le 4 Fasce di Gravità

La tua tossicità si muove tra 5 stati. L'icona del buff cambia per farti capire a colpo d'occhio in che fascia sei.

| Fascia | Range | Icona Buff | Cosa Succede |
|--------|-------|-----------|--------------|
| **Safe** | 0 – 25 | — | Nessun effetto. Bevi pure. |
| **Mild** | 26 – 50 | "Weaken" | Effetti lievi: nausea, tremore, vista annebbiata |
| **Moderate** | 51 – 75 | "Mindrot" | Effetti moderati: vomito, stat drop, spasmi muscolari |
| **Severe** | 76 – 100 | "Spell Plague" | Effetti gravi: allucinazioni, paralisi tossica, sanguinamento interno |
| **Critical** | 100+ | "Strangulation" | **Collasso tossico**: rischio di caduta rovinosa |

Al cambio di fascia ricevi un **messaggio overhead** (*"Ti senti un po' nauseato"*, *"Stai per vomitare"*, *"Il tuo corpo cede all'overdose"*). Quando la tossicità scende, compaiono messaggi di recupero.

---

## ⚡ Catalogo Effetti Collaterali

Quando superi una soglia, il sistema tira un **side effect** tra quelli compatibili con i tag attivi. Tra un effetto e l'altro c'è un **gap minimo di 4 secondi** per evitare spam. Mentre sei in fascia negativa, ogni ~10 secondi il sistema rolla di nuovo.

### Fascia Mild (26 – 50)

| Effetto | Condizione Tag | Cosa Fa |
|---------|---------------|---------|
| **Nausea** | 2 o più categorie diverse attive | -8 Dex per 20s, suono di mal di stomaco |
| **Tremore** | Tag Stat attivo | Perdi il 30% della Stamina istantanea |
| **Vista annebbiata** | Tag Night o Cure attivo | LightLevel cala per 20s (vedi peggio) |

### Fascia Moderate (51 – 75)

| Effetto | Condizione Tag | Cosa Fa |
|---------|---------------|---------|
| **Vomito** | Qualsiasi (bonus se Heal dominante) | Animazione + Frozen 2s, **taglia la tossicità del 40%** |
| **Abbassamento stat** | Tag Stat dominante | -10 su uno stat random (Str/Dex/Int) per 30s |
| **Spasmi muscolari** | Tag Refresh dominante | Stamina a 0 + -15 Dex per 15s |

### Fascia Severe (76 – 100)

| Effetto | Condizione Tag | Cosa Fa |
|---------|---------------|---------|
| **Allucinazioni** | Cure+Night o Stat+Poison | Suoni random, visioni fantasma per ~25s |
| **Paralisi tossica** | Poison, o Heal+Stat | Paralizzato per 3-5 secondi |
| **Sanguinamento interno** | Heal dominante | DoT 2-4 HP ogni 3 secondi per 30s |

### Fascia Critical (>100)

| Effetto | Condizione Tag | Cosa Fa |
|---------|---------------|---------|
| **Collasso tossico** | Qualsiasi | HP ridotto al 10%, Frozen 5s, tossicità dimezzata |

> Il **vomito** e il **collasso** sono le uniche due "valvole di sfogo" che riducono la tossicità automaticamente. Paradossalmente, un vomito in tempo utile può salvarti dal collasso.

---

## 🎭 Combinazioni Chiave

Il sistema premia chi sa **mescolare** le pozioni con criterio. Alcuni esempi di combinazioni particolarmente rischiose:

### Heal + Stat (Healer da battaglia)

Bevi Greater Heal e Greater Agility mentre combatti → tag Heal e Stat entrambi attivi → in Severe triggera **Paralisi tossica**. Il tuo healer in mischia si blocca in mezzo agli avversari.

### Cure + Night (Esploratore avvelenato)

Entri in un dungeon con Nightsight, ti avveleni, bevi Greater Cure → tag Cure e Night insieme → in Severe triggera **Allucinazioni**. Il mondo ti appare distorto mentre sei in un covo nemico.

### Stat + Poison (Assassino fai-da-te)

Assassino che usa Poison Potion per avvelenare la sua arma mentre si pompa di Strength → combinazione Stat+Poison → **Allucinazioni** e paralisi sono in agguato.

### Heal × molti (Tank che cura sempre)

Bevi solo Heal potions di continuo → tag Heal dominante → in Severe rischi **Sanguinamento interno** (30 secondi di DoT mentre cerchi di curarti ancora, spirale mortale). Il body dice "basta potion".

### Refresh × molti (Stamina abuse)

Spammi Refresh per combattere senza stop → tag Refresh dominante → in Moderate triggera **Spasmi muscolari** (Stam a 0 + Dex -15). Tornerai esausto peggio di prima.

---

## 💡 Strategie e Consigli

### Per i PvE

- **Bevi con criterio** nei momenti critici: 2-3 Greater Heal consecutive ti salvano la vita, 10 ti uccidono da solo
- Tra un fight e l'altro, **dai tempo al decay** di scendere a Safe prima di rifornirsi con pozioni pre-pull
- Se ti accorgi di essere a Severe e non puoi disimpegnarti, **spera nel vomito** — taglia -40% istantanei

### Per i PvP

- Puoi **bullizzare gli healer** aspettando che accumulino tossicità: a Moderate iniziano a vomitare (stun 2s), a Severe sono paralizzabili
- Combina **Poison potion sull'arma + Stat potion personali** con cautela: se li combini male, ti paralizzi da solo
- Il Clarity Potion (faction) ora conta come tag a sé, attenzione agli stacking con altre categorie

### Per i Healer/Supporto

- Le **pozioni di categorie diverse** triggerano Nausea più facilmente (soglia "2+ tag")
- Se hai bisogno di cura continua, alterna **Heal + Cure + Refresh** invece di spammare solo Heal — il decay del tag Heal evita il sanguinamento interno
- Un **Vomito "programmato"** in momenti tranquilli può essere una strategia: perdi 2s di stun ma torni pulito

### Per i Mob/Pet

Anche i **mob** e i **pet** bevono con tossicità. Un monster healer che spamma Greater Heal finirà per vomitare davanti a te e aprire una finestra di attacco.

---

## ❓ FAQ

**D: Come vedo la mia tossicità attuale?**
R: Non c'è una barra numerica. Ti affidi alla **BuffIcon** (Weaken/Mindrot/SpellPlague/Strangulation) e ai **messaggi overhead** ai cross di soglia. L'idea è che il tuo personaggio "sente" il malessere, non lo legge in un grafico.

**D: Il decay funziona anche se sono offline?**
R: Sì. Se fai logout con tossicità 80 e rientri dopo 2 minuti (120 secondi), la trovi a 0 grazie al decay di 1 punto al secondo.

**D: Il salvataggio del server mi conserva lo stato?**
R: Sì. Tossicità, tag attivi e timer di side effects sono serializzati con il mondo. Un riavvio del server non ti "cura" magicamente.

**D: Le pozioni lanciabili (Explosion, Conflagration, Confusion Blast) contribuiscono?**
R: No. Quelle hanno sempre avuto un sistema di cooldown tattico (30s/60s) e resta invariato. Solo le pozioni **bevute** alimentano la tossicità.

**D: Posso bere la stessa Agility due volte di fila?**
R: Sì, la seconda bevuta rinfresca la durata dello StatMod esistente (non lo impila). Ma ti beccate **+18 punti** di tossicità per la seconda bevuta, più un secondo tag Stat attivo — più tossico, più bersaglio per lo Stat Drop.

**D: Come si riduce la tossicità velocemente?**
R: **Vomito** automatico (taglia -40% quando scatta in Moderate) e **Collasso tossico** (dimezza a 100+) sono gli unici "trick". Per il resto, decay naturale: devi aspettare.

**D: Un pet che spamma Heal potion si suicida?**
R: Ad oggi, l'AI dei mob/pet non controlla la sua tossicità prima di bere. È un punto aperto — potrebbe essere bilanciato in futuro. In pratica, i pet healer spesso si auto-sabotano, e tu puoi sfruttarlo.

**D: Il buff della pozione (es. +10 Str dell'Agility) si applica anche se vengo già vomitato dopo?**
R: Sì. La pozione fa il suo effetto (heal, stat, cure…) **prima** di aggiungere tossicità. Il side effect scatta dopo, ma non annulla il buff appena ricevuto.

**D: Ho dimenticato che tossicità ho e non ho la buff icon. Come faccio?**
R: Se non vedi nessuna icona, sei in **Safe** (0-25). Puoi bere tranquillamente.

---

*Ultimo aggiornamento: Aprile 2026*
