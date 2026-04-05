# 🏰 Guild City System
*Costruisci citta' custom dentro il territorio della tua gilda usando il design editor nativo di UO*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Concetti chiave](#concetti-chiave)
- [Requisiti](#requisiti)
- [Il Building Tool e il menu City Management](#il-building-tool-e-il-menu-city-management)
- [Catalogo delle Foundation](#catalogo-delle-foundation)
- [Piazzare una Foundation](#piazzare-una-foundation)
- [Il Design Editor Custom House](#il-design-editor-custom-house)
- [Demolire una Foundation](#demolire-una-foundation)
- [Personal Lockdown System](#personal-lockdown-system)
- [Watermark chest slot e TaxAccount](#watermark-chest-slot-e-taxaccount)
- [Permessi e accessi](#permessi-e-accessi)
- [Edge cases e gestione automatica](#edge-cases-e-gestione-automatica)
- [Limiti e configurazione](#limiti-e-configurazione)
- [Differenza tra Guild City System e Building System](#differenza-tra-guild-city-system-e-building-system)
- [FAQ](#faq)

---

## 📜 Panoramica

Il **Guild City System** permette ai giocatori di costruire **intere citta' personalizzate** all'interno del territorio della propria gilda. A differenza del [Building System](#sectionWiki/Guild%20System/Building%20System) che lavora tile-per-tile con statici craftabili, il Guild City System sfrutta il **sistema custom house nativo di Ultima Online**: scegli una foundation vuota della dimensione che preferisci, entri in design mode, e disegni tile per tile muri, porte, pavimenti, tetti, finestre usando l'editor integrato del client.

Il risultato: **strutture completamente custom** create dai player, con porte che si aprono, pavimenti su piu' piani, tetti personalizzati, finestre, ornamenti architettonici. Una gilda puo' costruire la propria citta' completa con **guild hall, torri di guardia, case dei membri, workshop, magazzini**, pagando tutto dalla **treasury** della stone territoriale.

> **Non si piazzano case prefabbricate**. Ogni foundation inizia come piattaforma vuota — tutto il resto viene disegnato dal player nel design editor, tile per tile.

### Cosa puoi fare:
- Piazzare foundation di varie dimensioni (7x7 fino a 12x12) dentro il territorio
- Aprire il design editor nativo UO e disegnare la struttura tile per tile
- Aggiungere walls, floors, roofs, doors, windows, stairs
- Lockare item personali (bauli, contenitori, furniture) dentro le tue strutture
- Assegnare ownership di item specifici ai membri della gilda
- Gestire access list per bauli/contenitori (stile casa UO)
- Demolire e ripianificare (con refund entro 5 minuti)

---

## 🧱 Concetti chiave

### Foundation
Una **foundation** e' una piattaforma vuota delle dimensioni scelte che viene piazzata nel mondo. Rappresenta la base su cui il player costruisce la propria struttura custom. E' funzionalmente identica alla foundation delle **customizable house** di UO Age of Shadows.

### Design State
Ogni foundation ha tre "stati" del design:
- **Current** — cio' che e' visibile nel mondo in questo momento
- **Design** — il lavoro in corso durante la customizzazione (modifica live)
- **Backup** — l'ultimo stato salvato come backup dal player

Durante il design mode, il player modifica il **Design** state. Quando fa Commit, il Design diventa il nuovo Current.

### Treasury
Tutti i costi (piazzamento foundation, espansione territorio, tasse) vengono pagati dalla **Gold Treasury** della [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone), non dal bank personale dei player. La gilda finanzia la propria citta'.

### Personal Lockdown
Un sistema parallelo che permette ai builder di **bloccare item** (bauli, contenitori, porte, furniture) dentro il territorio e **assegnarli in ownership a un membro specifico** della gilda. Il membro gestisce poi una propria access list (come i friends di casa), decidendo chi puo' aprire i suoi bauli.

### Watermark chest slot
Il limite di bauli personali che un membro puo' avere e' dinamico: **ogni 25.000 gold di credito** accumulato nel suo [GuildTaxAccount](#sectionWiki/Guild%20System/Guild%20Accountant) = **+1 slot baule**. Quando il credito sale il limite cresce. Il check e' un **watermark**: se il credito scende dopo aver gia' piazzato i bauli, quelli esistenti **restano**, ma per piazzarne uno nuovo devi riarrivare alla soglia.

---

## 📜 Requisiti

Per usare il Guild City System devi soddisfare **tutte** queste condizioni:

| Requisito | Dettaglio |
|-----------|----------|
| **Essere in una gilda con territorio** | La stone deve esistere, essere confermata, e la tua gilda deve essere l'`OwnerGuild` |
| **Avere il permesso di Building** | Il Guild Leader deve averti aggiunto alla lista `BuildPermissions` della stone tramite la tab "Building" del management gump |
| **Essere dentro il territorio** | Quando apri il City Management dal BuildingTool, devi trovarti fisicamente dentro il territorio della tua gilda |
| **Avere il Building Tool** | Il Building Tool ottenibile craftato/comprato — vedi [Building System](#sectionWiki/Guild%20System/Building%20System) |
| **Treasury con gold sufficiente** | Per piazzare una foundation serve che la Gold Treasury della stone abbia il costo della entry scelta |

> I **Leader** della gilda ovviamente hanno il permesso automatico. Gli altri membri devono essere aggiunti esplicitamente alla lista BuildPermissions dal Leader.

---

## 🔨 Il Building Tool e il menu City Management

Il **Building Tool** (martello craftable) e' lo strumento unico che gestisce tutte le operazioni del sistema building + city + personal lockdown. Dopo il doubleclick si apre un menu con 9 azioni:

| # | Azione | Scope |
|---|--------|-------|
| 1 | Place Static | Building System (statici tile-per-tile) |
| 2 | Pick Up Static | Building System |
| 3 | Rotate Static | Building System |
| 4 | Repair Static | Building System |
| 5 | Info / Status | Building System **e** Personal Lockdown (vedi sotto) |
| 6 | Attack Static | Building System |
| 7 | **City Management** | **Guild City System (questo)** |
| 8 | **Lock Down & Grant** | **Personal Lockdown** |
| 9 | **Release Lockdown** | **Personal Lockdown** |

Il bottone **City Management** (azione #7) e' il punto di entrata al sistema city building. Richiede che tu sia **dentro un territorio di gilda** e che tu sia in `BuildPermissions`. Se le condizioni non sono soddisfatte viene mostrato un messaggio di errore (es. "You must be inside a guild territory to manage city buildings").

---

## 📦 Catalogo delle Foundation

Il catalogo MVP offre **5 dimensioni di plot**, tutte a due piani (two-story), prese direttamente dal sistema custom house di ModernUO:

| Dimensione | Nome | MultiID | Costo (gold) | Lockdown slots |
|-----------|------|---------|--------------|----------------|
| **7 x 7**  | Small Plot    | `0x13EC` | 30.500  | 244 |
| **8 x 8**  | Compact Plot  | `0x13F9` | 39.000  | 374 |
| **9 x 9**  | Standard Plot | `0x1406` | 48.500  | 431 |
| **10 x 10** | Large Plot    | `0x1413` | 59.000  | 632 |
| **12 x 12** | Grand Plot    | `0x142D` | 83.000  | 690 |

> **Costi modulari** tramite config: l'amministratore puo' moltiplicare tutti i costi via `foundationCostMultiplier` in `building-system.json`. Il default e' `1.0` (costi catalogo as-is).

Ogni foundation include un numero di **lockdown slots** che puoi usare per il sistema di personal lockdown o per le meccaniche house standard (secure containers, lockdowns, ecc.).

### Come scegliere la dimensione

- **Small Plot (7x7)** — ideale per case di singoli membri, magazzini, avamposti di guardia
- **Compact Plot (8x8)** — case medie, piccoli workshop
- **Standard Plot (9x9)** — case versatili, workshop di gilda
- **Large Plot (10x10)** — guild hall, sedi di riunione
- **Grand Plot (12x12)** — residenze di prestigio, cuartel generale, templi

---

## 🎯 Piazzare una Foundation

Il flow completo di piazzamento:

### Step 1 — Apertura menu
1. Trovati dentro il territorio della tua gilda
2. Doubleclick sul **Building Tool** nel tuo backpack
3. Nel menu clicca **azione #7 "City Management"**

Il sistema verifica che tu sia in un territorio valido e con permessi. Se OK, si apre il **Guild City Gump** (560x460 px).

### Step 2 — Guild City Gump (top-level management)
Il gump mostra:
- **Nome della guild** proprietaria del territorio
- **Treasury disponibile** (in gold)
- **Count delle foundation gia' piazzate** (N / Max)
- **Lista delle foundation esistenti** — ogni riga ha un button "Info" per ispezionare e "demolish" per rimuovere
- Bottone grande **"Place New Foundation"**

### Step 3 — Foundation Catalog
Cliccando "Place New Foundation" si apre il **Guild City List Gump** che elenca le 5 foundation disponibili. Ogni entry mostra:
- Nome e dimensione
- Descrizione dell'uso tipico
- Costo in gold (colorato in rosso se la treasury non basta)
- Numero di lockdown slots

Le entry che la treasury non puo' permettersi sono **greyed out** e non cliccabili.

### Step 4 — Targeting
Cliccando un'entry affordable, il cursor entra in **MultiTarget mode**: il client mostra **l'outline del multi** sovrapposto al terreno mentre muovi il cursore. Puoi vedere esattamente dove la foundation verra' piazzata.

Clicca su una tile nel territorio per confermare il target.

### Step 5 — Validation
Il sistema esegue una pipeline di controlli in ordine:

1. **Stone valida + guild assegnata**
2. **Player dentro il territorio** e con `BuildPermissions`
3. **Treasury >= costo** della foundation
4. **Count foundations < MaxFoundations** (= `TerritoryTiles × 3`)
5. **Ogni tile del footprint dentro TerritoryRects** (check esatto tramite `MultiData.GetComponents`)
6. **Terreno passabile** sotto la foundation (no acqua, no impassable)
7. **Nessun static bloccante** (altre foundation, muri di case esistenti, statici impassable)
8. **Foundation surface check** — la foundation deve riposare su un livello Z valido
9. **Border clearance** — un tile intorno al perimetro deve essere libero

Se un check fallisce, viene mostrato un messaggio specifico (es. "The foundation would extend outside the territory boundary", "The guild treasury cannot cover the cost", "A static obstacle blocks the placement").

### Step 6 — Spawn
Se tutti i check passano:
- Il costo viene **dedotto dalla treasury** (bypass per GM)
- Una `GuildBuildingFoundation` viene spawnata al centro del target, con `placedBy = te` e `placedAtUtc = adesso`
- Il foundation viene registrato in `stone.PlacedFoundations`
- Eventuali item/mobile nel footprint vengono spostati alla location della stone
- Viene mostrato il messaggio: *"Foundation placed. Treasury: X gold remaining. Say 'I wish to customize this house' while standing on the foundation to enter design mode."*

---

## 🎨 Il Design Editor Custom House

Dopo aver piazzato la foundation, quella appare come una **piattaforma vuota** (solo il pavimento base della dimensione scelta) nel mondo. Per costruire la struttura vera e propria devi entrare in **design mode**:

### Entrare nel design mode

1. Cammina sulla foundation (stai sopra la piattaforma)
2. Doubleclick sulla **HouseSign** della foundation (un sign appare automaticamente al bordo della piattaforma quando viene piazzata)
3. Si apre il **HouseGumpAOS** — il gump di gestione house nativo di UO
4. Clicca **"Customize This House"** nel menu

Il sistema verifica che tu sia "owner" della foundation (per il Guild City System, questo significa che sei in `BuildPermissions` della stone). Se OK:
- Il sistema fa **RelocateEntities** — sposta temporaneamente qualsiasi entita' dentro la foundation per permettere la modifica
- Invia al client il packet `SendBeginHouseCustomization(Serial)`
- Il **design editor nativo del client UO si apre**

### L'editor (client-side)

Il design editor e' un'interfaccia nativa del client UO (packets `0xD7` per comandi outgoing, `0xD8` per dati incoming). E' lo stesso identico editor usato per le customizable house di AoS, quindi chi ha gia' esperienza con le case di UO si trovera' a suo agio.

L'editor mostra:
- Una **vista dall'alto** (top-down) della foundation con griglia tile
- Una **palette di tiles** sulla destra, divisa per categoria:
  - **Walls** (muri): centinaia di stili dalle stanze classiche ai mura castello
  - **Doors** (porte): diversi tipi, si aprono/chiudono automaticamente
  - **Floors** (pavimenti): tile di vario colore e materiale
  - **Roofs** (tetti): pezzi di tetto per costruire copertura a piu' pendenze
  - **Stairs** (scale): per collegare piani diversi
  - **Windows** (finestre)
  - **Fixtures** (signpost, teleporter)
- Bottoni **Commit**, **Revert**, **Backup**, **Restore Backup**

### Lavoro tile per tile

Il player seleziona un tile dalla palette e clicca una cella della griglia per piazzarlo. Puo' anche rimuovere tile cliccando con il modificatore "remove" attivo. Ogni modifica aggiorna il **Design state** in tempo reale e viene mostrata come preview.

**Importante**: il Design state e' separato dal Current. Solo quando fai **Commit**, il Design diventa il nuovo Current e la struttura diventa visibile permanentemente. Puoi fare **Revert** per tornare al Current senza salvare, oppure **Backup** per salvare uno snapshot intermedio del design.

### Commit finale

Quando hai finito di disegnare, clicca **Commit**. Il server:
1. Applica il Design come nuovo Current
2. Chiama `ClearFixtures` — rimuove le porte/teleporter vecchi
3. Chiama `AddFixtures` — crea i nuovi oggetti porta/teleporter basati sul design
4. Ricostruisce la region
5. **Restore entities** — rimette eventuali item/mobile che erano stati spostati

La struttura e' ora permanente nel mondo e funzionante: porte che si aprono, tetto che blocca la pioggia/los, ecc.

---

## 💥 Demolire una Foundation

### Via Guild City Gump (consigliato)

Il metodo corretto per demolire una foundation e' dal **Guild City Gump**:

1. Apri BuildingTool → azione #7 "City Management"
2. Nel gump, trova la foundation nella lista placed foundations
3. Clicca il bottone **"demolish"** accanto alla riga

Il sistema verifica i permessi (builder o GM) e calcola il refund:
- **Entro 5 minuti dal placement** → **refund 100%** alla treasury (configurabile via `foundationRefundWindowMinutes`)
- **Dopo 5 minuti** → **0% refund** (l'oro e' perso)

Il foundation viene cancellato, eventuali entity dentro spostate (standard cleanup di BaseHouse).

### Via HouseGumpAOS (bloccato per non-staff)

Il HouseGumpAOS di UO ha un'opzione nativa "Demolish" ma per le guild foundation **e' effettivamente bloccata per i non-GM**: il metodo tenta di creare un deed per il refund ma `HouseFoundation.GetDeed()` ritorna `null` per le nostre foundation, quindi il gump mostra "Unable to refund house" e non procede.

Questo e' **voluto**: forzare il player a usare il Guild City Gump che gestisce correttamente il refund in treasury invece di dare oro nel bank personale.

I **GM** possono comunque demolire via HouseGumpAOS per fini amministrativi (senza refund).

---

## 🔐 Personal Lockdown System

Parallelo al sistema di foundation, il Guild City System include un sistema di **lockdown per-item** che permette ai builder di bloccare a terra bauli, contenitori, furniture e assegnarli in ownership a un membro specifico della gilda. **Identico alla meccanica di lockdown delle case UO**, ma scoped al territorio di gilda.

### Concetti base

- **I personal items sono item craftati/comprati normalmente** — non c'e' un catalogo dedicato. Crafta un `WoodenBox` dal Carpenter, o compra un `MetalChest` dal Blacksmith, e usalo come faresti con qualsiasi contenitore UO
- Il player droppa l'item a terra **dentro il territorio**
- Un **builder** (player con `BuildPermissions`) usa il BuildingTool → azione #8 **"Lock Down & Grant"** per bloccarlo e assegnarlo a un guild member
- Da quel momento il proprietario **e' l'unico** che puo' interagire con l'item — o chiunque altro lui aggiunga alla sua **access list**

### MVP scope

In MVP sono supportati:
- ✅ **Containers**: WoodenBox, MetalChest, BarrelStaves, StrongBox, KegStand, altri
- ✅ **Furniture non-container**: tavoli, sedie, bancarelle, oggetti decorativi
- ❌ **Porte**: NOT yet supportate (deferred Phase 2, serve un approccio swap-class perche' `BaseDoor.OnOpened` non passa per il region check)

### Il flow "Lock Down & Grant"

1. **Player A** (member della gilda) crafta un `WoodenBox` al carpenter
2. Lo droppa a terra dentro il territorio della gilda
3. **Builder B** (player con `BuildPermissions`) doubleclick BuildingTool → azione #8 **"Lock Down & Grant"**
4. Prima prompt: *"Target the item on the ground to lock down."* → B targetta il WoodenBox
5. Sistema valida: item nel territorio, non gia' locked, tipo supportato, permessi OK
6. Seconda prompt: *"Target the guild member to grant ownership of this item."* → B targetta A
7. Sistema valida: A e' un player, A e' nella `OwnerGuild`, A non ha gia' raggiunto il watermark chest slot limit
8. Il box viene locked: `Movable = false`, `IsLockedDown = true`, contenuto ricorsivamente lockato
9. Viene aggiunto un **`GuildPersonalItemRecord`** a `stone.PersonalItems` con ItemSerial, OwnerSerial=A, AccessList vuota, LockedAtUtc
10. Messaggi: B vede *"Item locked down and granted to A."*, A vede *"You have been granted ownership of a locked-down item in Guildname's territory."*

### Access check automatico

Ogni volta che qualcuno tenta di aprire il box o interagirci, il sistema esegue un **check automatico** via `PGTerritoryStoneRegion.CheckAccessibility` (hook nativo di ModernUO per region-scoped access control):

1. **GM bypass** — GM+ accede sempre
2. **Item non in `stone.PersonalItems`** — delega al comportamento di default (accessibile normalmente)
3. **Item in list, owner ancora in guild**:
   - Player == owner → **ALLOW**
   - Player in AccessList → **ALLOW**
   - Altrimenti → **DENY**
4. **Item in list, owner NON piu' in guild** (kicked/left/deleted):
   - Player in `OwnerGuild` → **ALLOW** (fallback "unbound")
   - Altrimenti → **DENY**

> Il check e' **lazy**: viene eseguito al momento dell'interazione, non ci sono hook su "player kicked from guild". Se un owner lascia la gilda, la prossima volta che qualcuno tenta di aprire il suo box, il sistema rileva che non e' piu' in guild e passa al fallback. Questo evita iterazioni massive su eventi guild-change.

### Gestire la access list

Il proprietario di un item locked puo' gestire la sua access list:

1. Apri BuildingTool → azione #5 **"Info / Status"**
2. Targetta l'item
3. Se sei l'owner → si apre il **`GuildPersonalItemGump`** (440x400)
4. Il gump mostra:
   - Nome dell'item
   - Location
   - Owner name
   - Tempo trascorso dal lock
   - **Lista degli access members** (con bottoni remove `X`)
   - Bottone **"Add Access Member"** → apre un target per aggiungere un nuovo membro
5. Per aggiungere: clicca "Add Access Member" → targetta un guild member → viene aggiunto
6. Per rimuovere: clicca il bottone `X` accanto al nome del membro

> Solo il proprietario (o un GM) puo' modificare la access list del proprio item. Gli altri vedono solo un label read-only *"This item is locked down and owned by X."*

### Release lockdown

Per rimuovere il lockdown da un item:

1. BuildingTool → azione #9 **"Release Lockdown"**
2. Targetta l'item locked

Permessi:
- L'**owner** dell'item puo' sempre fare release del proprio item
- Un **player con `BuildPermissions`** puo' fare release di qualsiasi item locked nel territorio (es. quando A lascia la gilda e il Leader vuole riassegnare i suoi item)

Dopo il release:
- `Movable = true`, `IsLockedDown = false` (contenitori recursive)
- Il record viene rimosso da `stone.PersonalItems`
- L'item torna a essere un normale oggetto UO, puo' essere preso, spostato, droppato nel backpack

---

## 💰 Watermark chest slot e TaxAccount

Il limite di **bauli** che un membro puo' avere personali dentro il territorio e' **dinamico**, basato sul suo **credito** nel [GuildTaxAccount](#sectionWiki/Guild%20System/Guild%20Accountant).

### La formula

```
MaxChestSlots = TaxAccount.Credit / 25.000
```

Esempi:
- Credito 0 gold → **0 slot**
- Credito 25.000 gold → **1 slot**
- Credito 50.000 gold → **2 slot**
- Credito 100.000 gold → **4 slot**
- Credito 125.000 gold → **5 slot**
- Credito 250.000 gold → **10 slot**

Il valore `25.000` e' configurabile via `personalChestCreditPerSlot` in `building-system.json`.

### Check solo al placement

Il check e' un **watermark**:
- Si controlla **SOLO al momento** in cui il builder fa "Lock Down & Grant" a un baule per quel membro
- Il member deve avere abbastanza slot disponibili al momento della richiesta
- Una volta piazzato il baule, **resta lockato anche se il credito scende** dopo

**Esempio**:
- Player X ha 100k credito → max 4 slot bauli
- X ha gia' 3 bauli locked (nel limite)
- X paga tasse guild, il credito scende a 60k → max sarebbe 2 slot, ma X ne ha 3 → i 3 esistenti **restano locked**, nessun effetto
- X vuole un 4° baule → serve che il builder glielo faccia Lock Down & Grant → il check calcola `60k / 25k = 2 slot`, X gia' ne ha 3, **limit reached** → rifiutato
- X deve risalire a 100k (= 4 slot) per poter avere il 4° baule

### Solo i bauli contano

Il watermark chest slot si applica **solo** ai container (bauli, casse, barrels, strongbox). Le porte, i tavoli, le sedie, altri item personal locked **non contano** nel conteggio del slot limit. Quindi un player con 25k credit puo' avere:
- 1 baule (il limite)
- + quanti tavoli/sedie/porte vuole (non limitati)

---

## 👥 Permessi e accessi

### Permessi per foundation (macro buildings)

| Azione | Chi puo' farlo |
|--------|----------------|
| Aprire Guild City Gump | GM+, o player con `BuildPermissions` dentro il territorio |
| Piazzare una foundation | Come sopra |
| Demolire una foundation | Come sopra (+ owner della foundation, se diverso) |
| Customizzare il design | **Chi il sistema considera "owner"** = player in `BuildPermissions` + guild member (override `IsOwner`) |
| Entrare nella foundation | Chiunque (territorio pubblico, walking) |
| Inspeccionare info (read-only) | Chiunque con BuildingTool azione #5 |

### Permessi per personal items (lockdown)

| Azione | Chi puo' farlo |
|--------|----------------|
| Lock Down & Grant | Player con `BuildPermissions` |
| Release Lockdown | Owner dell'item, oppure player con `BuildPermissions`, oppure GM |
| Aprire/interagire con item locked (owner attivo) | Owner + Access List members |
| Aprire/interagire con item locked (owner kicked) | Qualsiasi member della `OwnerGuild` (fallback unbound) |
| Gestire Access List | Owner dell'item, oppure GM |
| Vedere Info read-only | Chiunque (il gump mostra label neutro per non-owner) |

### Guild access vs personal access

Il territorio e' **sempre pubblico** per il walking — chiunque puo' camminare dentro una guild city (configurable via `AllowNonGuildMembers` della stone). L'**access control e' per-item**, non per-territorio:

- Walking: libero per tutti
- Foundation interior: libero per tutti (entrare, uscire)
- Porte di case custom: aperte a tutti in MVP (door lockdown deferred Phase 2)
- Bauli/contenitori locked: access list dell'owner
- Bauli/contenitori NOT locked: chiunque puo' aprirli (come qualsiasi container droppato a terra)

---

## ⚠️ Edge cases e gestione automatica

### Territorio si restringe

Se il Leader riduce il territorio della stone (via Expand tab → remove tiles) e alcune foundation/personal items cadrebbero fuori dai nuovi bounds:

- **Foundations fuori** → vengono **auto-eliminate** (orphan immediato MVP, Phase 2 puo' introdurre slow decay)
- **Personal items fuori** → vengono **auto-sbloccati** (lockdown flags rimossi, record rimosso dalla stone) → l'item resta a terra come oggetto UO normale, chiunque puo' prenderlo
- Il Leader vede un messaggio informativo dopo il confirm del draft territorio

### Stone distrutta

Se la stone viene eliminata (GM delete, HP destruction, ecc.):
- **Tutte le foundations** vengono cancellate (cascade)
- **Tutti i BuildableStatic** iniziano decay (orphan decay esistente)
- **Tutti i personal items** vengono sbloccati (movable=true, flag clearati)
- Il territorio perde la region

### Guild catturata / disbanded

(Handled tramite il sistema capture esistente della stone)
- La nuova `OwnerGuild` subentra come proprietaria
- Foundations rimangono fisicamente ma:
  - `IsOwner` ora fa match con la nuova guild + BuildPermissions della nuova owner
  - I vecchi builder perdono ownership automaticamente
- Personal items diventano `unbound` (lazy check fallisce perche' l'owner originale non e' nella nuova guild) → qualsiasi member della nuova guild puo' aprirli

### Player eliminato dal database

- L'owner di un personal item viene wipato → `World.FindMobile` ritorna null al prossimo access check → tratta come "owner non valido" → fallback unbound

### Refund window scaduta

- Il player tenta di demolire dopo 5 min → 0% refund, il foundation viene cancellato senza rimborso
- Check fatto tramite `GuildBuildingFoundation.IsWithinRefundWindow(TimeSpan)` che confronta `DateTime.UtcNow - PlacedAtUtc` con il valore config

---

## ⚙️ Limiti e configurazione

Tutti i valori sono esposti in `Configuration/building-system.json` per tuning runtime senza ricompilare.

| Chiave JSON | Default | Descrizione |
|-------------|---------|-------------|
| `maxFoundationsPerTile` | `3` | Moltiplicatore: max foundations = TerritoryTiles × N |
| `foundationCostMultiplier` | `1.0` | Moltiplica tutti i costi del catalogo (1.0 = as-is) |
| `foundationRefundWindowMinutes` | `5` | Finestra in minuti per refund 100% su demolizione |
| `personalChestCreditPerSlot` | `25000` | Credito TaxAccount richiesto per ogni slot baule personal |

Esempio file config completo:

```json
{
  "enabled": true,
  "maxStaticsPerTerritory": 200,
  "maxStaticsPerPlayer": 50,
  "workbenchMaxUses": 500,
  "toolMaxUses": 200,
  "baseDurabilityMultiplier": 1.0,
  "decayIntervalHours": 22,
  "decayAmountPerTick": 1,
  "maxFoundationsPerTile": 3,
  "foundationCostMultiplier": 1.0,
  "foundationRefundWindowMinutes": 5,
  "personalChestCreditPerSlot": 25000
}
```

### Calcolo del limite foundations

Il limite e' dinamico e **scala con l'espansione del territorio**:

- Territorio di 100 tile → max 300 foundations
- Territorio di 500 tile → max 1500 foundations
- Territorio di 2000 tile → max 6000 foundations

La formula e' `TerritoryTiles × maxFoundationsPerTile`. Espandendo il territorio (Expand tab) il limite cresce automaticamente. Riducendo il territorio il limite scende, ma le foundations esistenti NON vengono eliminate a meno che non siano fisicamente fuori dai nuovi bounds (edge case gestito separatamente).

---

## 🔁 Differenza tra Guild City System e Building System

Sono due sistemi **complementari** che lavorano sullo stesso territorio:

| Aspetto | [Building System](#sectionWiki/Guild%20System/Building%20System) | **Guild City System** (questo) |
|---------|-----------------|------------------------------|
| **Unita' di lavoro** | Statici singoli (micro) | Foundation multi-tile (macro) |
| **Fonte degli elementi** | Crafting al Building Workbench | Catalogo foundation + design editor nativo |
| **Dimensione tipica** | 1 tile per static | 7x7 fino a 12x12 per foundation |
| **Costo** | Risorse da inventory + skill Architecture | Gold dalla treasury della gilda |
| **Skill primaria** | Architecture + skill secondaria per materiale | Nessuna (solo permessi) |
| **Workflow** | Crafta → posiziona → lock con tool | Piazza foundation → design editor tile per tile |
| **HP e attacco** | HP, attaccabili da nemici, material armor | Non applicabile (Ageless MVP) |
| **Decay** | Si, con decay orphan quando stone destroyed | No (Ageless), cascade delete su stone destroy |
| **Personal lockdown** | N/A | ✅ supportato per containers/furniture |

**Caso d'uso tipico**:
- **Building System**: dettagli decorativi, mura connettori tra edifici, piccole strutture ornamentali, giardini, statici decorativi, porte singole, lanterne, colonne, sculpture
- **Guild City System**: edifici veri e propri (case dei membri, guild hall, torri, workshop, magazzini) costruiti interamente con il design editor UO

I due sistemi **coesistono nello stesso territorio**. Puoi avere una foundation guild city al centro e usare BuildableStatic per i dettagli intorno (mura di cinta, giardini, decor).

---

## ❓ FAQ

**Q: Posso piazzare una foundation fuori dal territorio della mia gilda?**  
A: No. Ogni tile del footprint deve essere dentro i `TerritoryRects` attivi della stone. Il sistema rifiuta il placement con il messaggio "The foundation would extend outside the territory boundary".

**Q: Cosa succede se la treasury non basta per il costo?**  
A: Il foundation non viene piazzato. Messaggio: "The guild treasury cannot cover the cost." Devi prima depositare piu' oro in treasury (via deposit, tasse, vendite vendor, ecc.).

**Q: Posso piazzare una foundation sopra un BuildableStatic esistente?**  
A: No. Il check rileva i BuildableStatic locked come "impassable static" e rifiuta il placement con "A static obstacle blocks the placement." Devi prima rimuovere i statici sottostanti.

**Q: Posso piazzare una foundation sopra un'altra foundation?**  
A: No. La seconda foundation tenterebbe di essere piazzata dentro la HouseRegion della prima, e il check collision lo rileverebbe.

**Q: Cosa succede al contenuto di un baule quando il proprietario viene kicked dalla gilda?**  
A: Il baule diventa **unbound** al lazy check successivo. Qualsiasi membro della OwnerGuild puo' aprirlo. Il contenuto resta dentro, nessuna protezione automatica (come una casa UO che collassa).

**Q: Posso customizzare una foundation dopo aver gia' fatto Commit del design?**  
A: Si. Puoi rientrare in design mode quante volte vuoi, modificare il Design state, e committare di nuovo. Il design precedente puo' essere recuperato via Backup/Restore Backup nell'editor.

**Q: Posso mettere un trash barrel, un vendor, una forgia dentro una guild foundation?**  
A: In teoria si — la foundation eredita tutto il sistema house di UO, quindi voice commands come "I wish to place a trash barrel" dovrebbero funzionare. Tuttavia il MVP non e' stato testato con tutti questi feature avanzate — considera Phase 2.

**Q: I membri della mia gilda possono entrare liberamente nelle guild foundation?**  
A: Si, tutti i member (e in generale chiunque, per walking) possono camminare dentro le foundation. L'access control del Guild City System e' a livello **item** (personal lockdown), non a livello foundation/territorio.

**Q: Posso trasferire ownership di una foundation a un altro player?**  
A: No. Le foundations guild sono "possedute" dalla stone (collettivamente dalla gilda), non da singoli player. Trasferire una foundation non ha senso nel modello — semplicemente il nuovo builder diventa il manager via BuildPermissions.

**Q: Se la gilda viene sciolta, le foundation sopravvivono?**  
A: La stone gestisce questo automaticamente: se la guild viene disbanded, la stone perde la OwnerGuild, e il trattamento segue il flow di cattura (la stone diventa unclaimed o catturabile). Le foundation rimangono fisicamente finche' la stone esiste.

**Q: Il sistema supporta le porte personal lockdown?**  
A: **Non in MVP**. Le porte hanno un meccanismo di apertura (`BaseDoor.OnOpened`) che non passa per il region accessibility check, quindi richiedono un approccio swap-class (sostituire la porta con una subclass custom) che sara' implementato in Phase 2.

**Q: Quanto tempo ci vuole per costruire una citta' completa?**  
A: Dipende dalla complessita' del design. Una foundation piccola (7x7) puo' essere designata in 15-30 minuti. Una grand plot (12x12) con molti dettagli puo' richiedere piu' sessioni. Il design editor nativo di UO e' veloce una volta che ci si abitua alla palette e ai comandi.

**Q: Posso avere uno staff/admin tool per gestire tutte le guild city sul server?**  
A: Non in MVP. Come ultimo ricorso i GM possono usare `[props` sulla stone per vedere la lista di `PlacedFoundations` e `PersonalItems`. Un admin dashboard dedicato e' candidato Phase 2.

---

## 📚 Vedi anche

- [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) — la stone da cui parte tutto
- [Building System](#sectionWiki/Guild%20System/Building%20System) — sistema tile-per-tile parallelo per decor
- [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant) — gestione tasse e credito (usato dal watermark chest slot)
- [Architecture Skill](#sectionWiki/Skills/Architecture) — skill usata nel Building System (NON richiesta per il Guild City System)
