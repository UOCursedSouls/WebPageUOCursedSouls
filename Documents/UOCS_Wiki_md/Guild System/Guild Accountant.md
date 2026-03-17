# 💰 Guild Accountant
*L'esattore delle tasse del territorio di gilda*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Come Piazzarlo](#come-piazzarlo)
- [Pagare le Tasse](#pagare-le-tasse)
- [Comandi Vocali](#comandi-vocali)
- [Sistema di Bilancio](#sistema-di-bilancio)
- [Ritiro Credito](#ritiro-credito)
- [FAQ](#faq)

---

## 📜 Panoramica

Il **Guild Accountant** e un NPC vendor speciale legato alla [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone). Si occupa di riscuotere le tasse giornaliere dai membri della gilda e gestire i bilanci individuali.

> **Tipo**: NPC Vendor
> **Posizione**: All'interno del territorio della gilda
> **Interazione**: Trascinamento gold + comandi vocali
> **Negozio**: Vende Contract of Employment, Vendor Rental Contract, Commodity Deed

### Cosa fa:
- Raccoglie i **pagamenti delle tasse** dai membri della gilda
- Mostra lo **stato del bilancio** (debito/credito) di ogni membro
- Permette di **ritirare il credito** in eccesso
- Fornisce informazioni sulle tasse e sullo stato del territorio

---

## 🏗️ Come Piazzarlo

1. Apri il pannello della Guild Territory Stone → pagina **Main**
2. Clicca **"Add or Move"** accanto a "The guild Accountant"
3. Il Guild Accountant verra piazzato alla tua **posizione attuale**
4. Devi essere **dentro il territorio** per piazzarlo

### Spostamento:

Per spostare l'Accountant:
1. Posizionati dove vuoi metterlo (dentro il territorio)
2. Clicca di nuovo **"Add or Move"** dalla pagina Main
3. L'NPC verra spostato alla tua nuova posizione

> 💡 Il Guild Accountant non puo camminare — resta fisso dove lo piazzi.

---

## 💳 Pagare le Tasse

### Metodo principale: Trascinamento gold

1. Prendi del **gold** dal tuo zaino
2. **Trascinalo** sopra il Guild Accountant
3. L'Accountant calcolera automaticamente il tuo debito

### Comportamento:

| Situazione | Cosa succede |
|-----------|-------------|
| **Hai un debito** | Il gold paga il debito. L'eccesso viene restituito |
| **Sei in pari** | Il gold va tutto in credito |
| **Hai gia credito** | Il gold si aggiunge al credito esistente |

### Esempio di dialogo:

Quando paghi, l'Accountant risponde in modo formale:

- *"Your payment of 500 gold is recorded, Ser [Nome]. Your remaining debt stands at 1,500 gold."*
- *"A deposit of 1,000 gold is placed to your account, Lady [Nome]. Your credit now stands at 500 gold."*
- *"Your 2,000 is received, Ser [Nome]. 1,500 gold for the tax. 500 gold is returned. The ledger is settled."*

> ⚠️ Solo i **membri della gilda** proprietaria possono pagare le tasse qui.

---

## 🗣️ Comandi Vocali

Parla vicino al Guild Accountant (entro 4 tile) per interagire.

| Comando | Effetto |
|---------|--------|
| **"balance"** o **"status"** | Mostra il tuo bilancio attuale (debito/credito) |
| **"help"** | Lista di tutti i comandi disponibili |
| **"tax"** o **"taxes"** | Informazioni sulle tasse del territorio |
| **"lastpay"** | Data dell'ultimo pagamento |
| **"pay"** | Istruzioni su come pagare |
| **"withdraw"** | Ritira tutto il credito disponibile |
| **"withdraw 1000"** | Ritira una quantita specifica di credito |

### Esempio:

```
Tu dici: "balance"
Accountant: "Ser Arutosio, you owe 300 gold in territory taxes."
Accountant: "Daily tax: 100 gold."
Accountant: "Days in debt: 3."
Accountant: "Last payment: 2026-03-15 14:30"
```

---

## 📊 Sistema di Bilancio

Ogni membro della gilda ha un **conto individuale** gestito dall'Accountant.

### Come funzionano le tasse:

1. Il leader imposta una **tassa giornaliera** (es: 100 gold/giorno)
2. Ogni giorno, il sistema **addebita** la tassa al bilancio di ogni membro attivo
3. Il bilancio puo essere:
   - **Positivo (CREDIT)**: Hai pagato in anticipo
   - **Zero (BAL 0)**: Sei in pari
   - **Negativo (DEBT)**: Devi pagare

### Tracciamento:

Per ogni membro viene tracciato:

| Dato | Descrizione |
|------|-------------|
| **PlayerName** | Nome del personaggio |
| **Balance** | Bilancio attuale (positivo = credito, negativo = debito) |
| **TotalPaid** | Totale gold pagato in tutta la storia |
| **TotalTaxCharged** | Totale tasse addebitate |
| **PaymentsCount** | Numero di pagamenti effettuati |
| **DaysInDebt** | Giorni consecutivi in debito |
| **LastPayment** | Data dell'ultimo pagamento |
| **IsActiveMember** | Se e ancora membro della gilda |

### Membri che lasciano la gilda:

- Se un membro **lascia la gilda**, il suo account resta nel registro
- Lo stato diventa **"Left"** invece di **"Member"**
- Se ha **credito**, puo ritirarlo parlando con l'Accountant
- Le tasse **non vengono piu addebitate** ai non-membri

---

## 🏧 Ritiro Credito

Se hai pagato in anticipo e hai credito:

### Come ritirare:

1. Avvicinati al Guild Accountant (entro 4 tile)
2. Dici **"withdraw"** per ritirare tutto il credito
3. Oppure **"withdraw 500"** per ritirare una quantita specifica
4. Il gold viene messo nel tuo zaino

### Limiti:

- Puoi ritirare solo il **credito disponibile** (non piu del tuo bilancio positivo)
- Il ritiro e limitato anche dal **gold nella treasury** del territorio
- Se la treasury e vuota, non puoi ritirare anche se hai credito

### Esempio:

```
Tu dici: "withdraw 500"
Accountant: "Ser Arutosio, You withdraw 500 gold credit from the territory taxes."
```

---

## ❓ FAQ

**D: Dove trovo il Guild Accountant?**
R: Viene piazzato dal leader della gilda tramite il pannello della Guild Territory Stone (pagina Main → "Add or Move").

**D: Posso pagare le tasse senza l'Accountant?**
R: No. L'Accountant e l'unico modo per pagare le tasse del territorio.

**D: Cosa succede se non pago le tasse?**
R: Il tuo debito continua ad aumentare giornalmente. Il leader puo vedere chi e in debito dal pannello Taxes. Le conseguenze sono a discrezione del leader della gilda.

**D: Se rientro nella gilda dopo averla lasciata, il mio vecchio bilancio c'e ancora?**
R: Si. Il sistema traccia il tuo account in modo permanente. Se avevi debiti, li ritroverai.

**D: Il gold delle tasse dove va?**
R: Nella **treasury** del territorio. Il leader puo ritirarlo dal pannello Main.

**D: L'Accountant puo essere ucciso?**
R: Si, ma il suo spawner lo fara rinascere automaticamente dopo qualche secondo.

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) | [Crystal Mana Sphere](#sectionWiki/Guild%20System/Crystal%20Mana%20Sphere)*
