# 🏰 Guild Territory Stone
*La pietra fondamentale per reclamare e gestire un territorio di gilda*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Come Piazzare la Stone](#come-piazzare-la-stone)
- [Cattura del Territorio](#cattura-del-territorio)
- [Gestione del Territorio](#gestione-del-territorio)
- [Sistema di Sicurezza](#sistema-di-sicurezza)
- [Espansione del Territorio](#espansione-del-territorio)
- [Vendor e NPC](#vendor-e-npc)
- [Barriere Magiche](#barriere-magiche)
- [Tasse Giornaliere](#tasse-giornaliere)
- [Comandi e Interazioni](#comandi-e-interazioni)
- [FAQ](#faq)

---

## 📜 Panoramica

La **Guild Territory Stone** e un oggetto speciale che permette alle gilde di reclamare, proteggere e gestire un territorio nel mondo di gioco. Una volta piazzata e conquistata, la stone diventa il cuore del tuo insediamento di gilda.

> **Peso**: 500 stones
> **Tipo**: Item unico per gilda
> **Accesso gestione**: Solo il leader della gilda (o GM)

### Cosa puoi fare con un territorio:
- Proteggere un'area con guardie armate
- Piazzare vendor NPC (banchiere, fabbro, mago, ecc.)
- Controllare chi puo entrare e cosa puo fare
- Espandere i confini comprando nuovi tile
- Attivare barriere magiche (anti-recall, anti-gate, anti-field)
- Riscuotere tasse giornaliere dai membri della gilda

---

## 🗺️ Come Piazzare la Stone

Per piazzare una Guild Territory Stone, devi trovare un luogo adatto. La stone analizzera automaticamente i dintorni quando la usi.

### Requisiti del luogo:

| Requisito | Dettaglio |
|-----------|----------|
| **Mappa valida** | Deve essere su una mappa di gioco (non interna) |
| **Lontano da citta** | Almeno 15 tile da qualsiasi regione (dungeon, citta, aree guardate) |
| **Lontano da case** | Non sovrapposta a case di giocatori o le loro regioni |
| **Lontano da altre stone** | Distanza minima = tuo raggio + altro raggio + 10 tile margine |
| **A terra** | Non dentro un container |

### Feedback di piazzamento

Quando fai doppio click sulla stone, il tuo personaggio esamina il luogo e ti dice:

- *"This is a good spot..."* — Il luogo e valido
- *"There are protected lands too close..."* — Troppo vicino a una regione
- *"I can see another guild's claim..."* — Troppo vicino a un'altra stone (con direzione da seguire)
- *"This place feels wrong..."* — Sei dentro una regione protetta

> 💡 Il messaggio indica anche in quale **direzione cardinale** spostarti per trovare una posizione valida.

---

## ⚔️ Cattura del Territorio

Una volta piazzata la stone in un luogo valido, la cattura inizia automaticamente.

### Come funziona:

1. La stone deve essere **a terra** e in un **luogo valido**
2. Uno o piu membri della gilda devono restare vicini alla stone (entro il raggio di cattura)
3. La barra di progresso avanza ogni tick (configurabile, default 2 secondi)
4. Se nessuno e presente, il progresso diminuisce lentamente
5. Se membri di **gilde diverse** sono vicini, la stone diventa **contestata** e il progresso si ferma
6. Quando il progresso raggiunge il 100%, il territorio e conquistato!

### Parametri:

| Parametro | Default | Descrizione |
|-----------|---------|-------------|
| **Tempo cattura** | 10 secondi | Tempo totale per completare la cattura |
| **Tick rate** | 2 secondi | Frequenza di aggiornamento del progresso |
| **Raggio cattura** | 5 tile | Distanza massima dalla stone per contribuire |

---

## 🏛️ Gestione del Territorio

Dopo la cattura, fai doppio click sulla stone per aprire il **pannello di gestione**. Il pannello ha 7 pagine navigate dai bottoni in basso.

### Pagina Principale (Main)

- **Territory Status**: Mostra la dimensione del territorio e i giocatori attivi nell'area
- **Allow Housing**: Abilita/disabilita la costruzione di case nel territorio
- **Anti-Magic Field**: Attiva un campo anti-magia nell'area
- **Daily Tax**: Imposta la tassa giornaliera per i membri (0-10,000 gold)
- **Guild Accountant**: Piazza o sposta l'NPC esattore delle tasse
- **Treasury**: Ritira gold dalla cassa del territorio
- **Destroy Stone**: Distrugge la stone (restituisce il gold al leader)

> ⚠️ **Attenzione**: Distruggere la stone rimuove tutto — guardie, vendor, barriere, regione.

---

## 🛡️ Sistema di Sicurezza

La pagina **Security** controlla le guardie e le regole di combattimento.

### Guardie

Le guardie proteggono il territorio automaticamente:

- **Attaccano criminali e murderer** che entrano nel territorio
- **Proteggono i membri della gilda** — se qualcuno attacca un membro, le guardie intervengono
- Si **teletrasportano** al criminale (stile citta)
- Chiunque puo chiamare le guardie gridando **"Guards!"**

| Opzione | Descrizione |
|---------|-------------|
| **Spawn Guards** | Abilita/disabilita il sistema guardie |
| **Guard Count** | Numero massimo di guardie (0-15) |
| **Guard Strength** | Potenza delle guardie (1-10, moltiplica le stats) |

### Tipi di guardie:

| Tipo | Stile | Specialita |
|------|-------|-----------|
| **Warrior Guard** | Melee | Combattimento corpo a corpo con Halberd |
| **Archer Guard** | Ranged | Arciere a cavallo con arco |
| **Mage Guard** | Caster | Lancia Lightning, Paralyze, FlameStrike |

### Regole del territorio:

| Regola | Descrizione |
|--------|-------------|
| **Allow Non-Guild Members** | Permetti l'ingresso ai non membri |
| **Allow Combat** | Permetti il combattimento nel territorio |
| **Allow Spellcasting** | Permetti l'uso di magie |

---

## 📐 Espansione del Territorio

La pagina **Expand** ti permette di modificare la forma del tuo territorio tile per tile.

### Territorio iniziale

Quando viene conquistata, la stone crea un territorio di **11x11 tile** centrato sulla stone (raggio 5 in ogni direzione).

### Come espandere:

1. Clicca **"Start editing"** per entrare in modalita edit
2. Vedrai i **marker colorati** a terra:
   - 🟢 **Verde**: tile del territorio attuale (invariati)
   - 🟡 **Giallo**: tile nuovi che stai aggiungendo
   - 🔴 **Rosso**: tile che stai rimuovendo
3. Usa **"Add tile"** per selezionare nuovi tile adiacenti
4. Usa **"Remove tile"** per rimuovere tile (non dalla core area)
5. Clicca **"Apply Draft"** per confermare le modifiche (costa gold!)
6. Oppure **"Pause edit"** per mettere in pausa senza perdere le modifiche

### Pausa e ripresa:

- **Pause Edit**: Nasconde i marker ma conserva le modifiche. Puoi tornare e riprendere quando vuoi.
- **Cancel Edit**: Scarta TUTTE le modifiche e torna al territorio originale.
- Se ti allontani troppo (10+ tile dal confine), l'editing va automaticamente in pausa.

### Costo espansione:

Ogni tile ha un costo crescente:

```
Costo per tile = Costo base + (tile gia posseduti * Costo incrementale)
```

| Parametro | Default |
|-----------|---------|
| **Costo base** | 7,000 gold per tile |
| **Costo incrementale** | +50 gold per ogni tile gia posseduto |
| **Max tile** | 800 |
| **Max raggio** | 10 tile dal centro |

> 💡 Esempio: Se hai 121 tile (11x11) e vuoi aggiungerne 8, il costo sara circa 106,600 gold perche ogni tile successivo costa di piu.

### Regole della forma:

- I tile devono essere **adiacenti** (4 direzioni, no diagonale)
- Il territorio deve restare **contiguo** (no isole separate)
- Deve contenere la **core area** (11x11 attorno alla stone)
- La forma non puo essere troppo **stretta** (no righe da 1 tile)
- Minimo **9 tile** totali

### Conferma definitiva:

Il bottone **"Confirm territory"** blocca la forma definitivamente. Dopo la conferma:
- La forma **non puo piu essere modificata**
- Solo un GM puo sbloccarla
- Fai questo solo quando sei sicuro della forma finale

---

## 🏪 Vendor e NPC

La pagina **Vendors** ti permette di piazzare NPC commercianti nel territorio.

### Vendor disponibili:

| Vendor | Servizio |
|--------|----------|
| Banker | Servizi bancari |
| Blacksmith | Riparazioni e vendita armi/armature |
| Provisioner | Oggetti generici |
| Mage | Reagenti e scroll |
| Armorer | Armature |
| Animal Trainer | Addestramento animali |
| Alchemist | Pozioni |
| Tailor | Stoffe e vestiti |
| Carpenter | Mobili e oggetti in legno |
| Tinker | Attrezzi |
| Bowyer | Archi e frecce |
| Butcher | Carne e cibo |
| Bard | Strumenti musicali |
| Herbalist | Erbe e ingredienti |

### Gestione vendor:

- **Add**: Piazza un nuovo vendor (costa gold dalla treasury)
- **Move**: Sposta il vendor alla tua posizione attuale
- **Delete**: Rimuove il vendor e il suo spawner
- **Max vendor**: 15 per territorio

---

## 🔮 Barriere Magiche

La pagina **BarielField** controlla le barriere magiche del territorio. Richiede una **Crystal Mana Sphere** collegata.

### Setup:

1. Piazza una [Crystal Mana Sphere](#sectionWiki/Guild%20System/Crystal%20Mana%20Sphere) nel territorio
2. Dalla pagina BarielField, clicca **"Link Crystal Mana Sphere"**
3. Seleziona la sfera — verra collegata alla stone e non sara piu spostabile

### Barriere disponibili:

| Barriera | Costo Mana/tick | Effetto |
|----------|----------------|---------|
| **Territory Mana Drain** | Variabile | Drena mana dai player nel territorio per caricare la sfera |
| **Disable Recall** | 5/tick | Blocca Recall e Mark nel territorio |
| **Disable Gate Travel** | 8/tick | Blocca Gate Travel e Sacred Journey |
| **Disable Magic Fields** | 10/tick | Blocca Fire Field, Poison Field, Paralyze Field, Wall of Stone |

### Come funziona il mana:

- Le barriere **consumano mana** dalla Crystal Mana Sphere ogni 5 secondi
- Se il mana finisce, le barriere si **disattivano automaticamente**
- Il **Territory Mana Drain** ricarica la sfera drenando mana dai player nel territorio (distribuito equamente)

### Controllo gate individuali:

Se ci sono Moongate o Teleporter nel territorio, puoi controllare ciascuno individualmente dalla pagina BarielField.

---

## 💰 Tasse Giornaliere

La pagina **Taxes** mostra lo stato delle tasse dei membri della gilda.

### Come funzionano:

1. Il leader imposta una **tassa giornaliera** (es: 100 gold/giorno)
2. Ogni giorno, il sistema addebita la tassa al bilancio di ogni membro
3. I membri **pagano** portando gold al [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant) o droppandolo sulla stone
4. Il gold va nella **treasury** del territorio

### Informazioni visualizzate:

| Colonna | Descrizione |
|---------|-------------|
| **Nome** | Nome del personaggio e stato (Member/Left) |
| **Bilancio** | DEBT (debito), CREDIT (credito), o BAL 0 |
| **Giorni in debito** | Da quanto tempo il membro e in negativo |
| **Ultimo pagamento** | Data dell'ultimo pagamento |

### Ordinamento:

Puoi ordinare la lista per:
- **Debt**: Chi deve di piu in cima
- **Name**: Ordine alfabetico
- **Last Pay**: Chi ha pagato piu di recente

---

## ⌨️ Comandi e Interazioni

| Azione | Come |
|--------|------|
| **Aprire il pannello** | Doppio click sulla stone (solo leader gilda o GM) |
| **Chiamare le guardie** | Dire "Guards!" nella regione del territorio |
| **Pagare le tasse** | Trascinare gold sul Guild Accountant |
| **Controllare il bilancio** | Dire "balance" o "status" vicino al Guild Accountant |
| **Ritirare credito** | Dire "withdraw" o "withdraw 1000" al Guild Accountant |

---

## ❓ FAQ

**D: Posso spostare la stone dopo averla piazzata?**
R: No. Una volta attivata, la stone e fissa. Puoi distruggerla e piazzarne una nuova.

**D: Cosa succede se distruggo la stone?**
R: Tutto viene rimosso (guardie, vendor, barriere, regione). Il gold nella treasury viene restituito al leader della gilda.

**D: Posso avere piu di un territorio?**
R: Si, ma le stone devono rispettare le distanze minime tra loro.

**D: Le guardie attaccano i miei alleati?**
R: No. Le guardie proteggono i membri della gilda e attaccano solo criminali, murderer, e chi attacca un membro.

**D: Cosa succede se il mana della sfera finisce?**
R: Le barriere magiche si disattivano automaticamente. Le guardie e i vendor continuano a funzionare normalmente.

**D: Posso cambiare la forma del territorio dopo averla confermata?**
R: No. La conferma (Officialize) e permanente. Solo un GM puo sbloccarla.

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Crystal Mana Sphere](#sectionWiki/Guild%20System/Crystal%20Mana%20Sphere) | [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant)*
