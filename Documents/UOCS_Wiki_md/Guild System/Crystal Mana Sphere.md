# 🔮 Crystal Mana Sphere
*La sfera cristallina che alimenta le barriere magiche del territorio*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Come Funziona](#come-funziona)
- [Gemme e Capacita](#gemme-e-capacita)
- [Collegamento alla Stone](#collegamento-alla-stone)
- [Ricarica del Mana](#ricarica-del-mana)
- [Effetti Visivi](#effetti-visivi)
- [FAQ](#faq)

---

## 📜 Panoramica

La **Crystal Mana Sphere** e un contenitore magico che immagazzina mana sotto forma di energia cristallina. Viene collegata alla [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) per alimentare le barriere magiche del territorio.

> **Tipo**: Contenitore speciale
> **Accesso**: Solo il leader della gilda puo aprirla
> **Contenuto**: Gemme che determinano la capacita massima di mana

### A cosa serve:
- Immagazzina mana per alimentare le barriere del territorio
- La capacita dipende dalle **gemme** inserite al suo interno
- Cambia **colore** in base al livello di carica
- **Levita** quando contiene mana (effetto visivo)

---

## ⚙️ Come Funziona

La Crystal Mana Sphere funziona come una batteria magica:

```
Gemme inserite → Capacita massima mana
Player nel territorio → Mana drenato → Sfera ricaricata
Sfera carica → Alimenta barriere magiche
Mana esaurito → Barriere disattivate
```

### Ciclo operativo:

1. **Inserisci gemme** nella sfera per aumentare la capacita
2. **Collega** la sfera alla Guild Territory Stone
3. **Attiva "Territory Mana Drain"** dal pannello BarielField
4. Il mana viene **drenato dai player** nel territorio e depositato nella sfera
5. Le **barriere magiche** consumano mana dalla sfera ogni 5 secondi
6. Se il mana finisce, le barriere si **disattivano**

---

## 💎 Gemme e Capacita

La capacita massima di mana dipende dal tipo e quantita di gemme inserite nella sfera.

| Gemma | Mana per unita | Descrizione |
|-------|----------------|-------------|
| 💎 **Diamond** | 20 mana | La gemma piu potente |
| 💚 **Emerald** | 15 mana | Ottimo rapporto qualita/prezzo |
| ❤️ **Ruby** | 10 mana | Energia media |
| 💙 **Sapphire** | 10 mana | Equivalente al Ruby |
| 🟡 **Amber** | 5 mana | Gemma base, economica |

### Esempio di capacita:

| Contenuto | Capacita totale |
|-----------|----------------|
| 10 Diamond | 200 mana |
| 5 Diamond + 10 Emerald | 250 mana |
| 20 Emerald + 20 Ruby | 500 mana |
| 50 Diamond | 1,000 mana |

> 💡 La capacita si aggiorna automaticamente quando aggiungi o rimuovi gemme. Il mana immagazzinato non puo superare la capacita — se rimuovi gemme, il mana in eccesso viene perso.

---

## 🔗 Collegamento alla Stone

### Come collegare:

1. Piazza la Crystal Mana Sphere nel territorio (a terra, non in un container)
2. Apri il pannello della Guild Territory Stone → pagina **BarielField**
3. Clicca **"Link Crystal Mana Sphere"**
4. Seleziona la sfera con il target cursor

### Dopo il collegamento:

- La sfera diventa **non spostabile** (Movable = false)
- Appare il pannello completo delle barriere
- Puoi vedere la capacita e il mana attuale

### Per scollegare:

Dalla stessa pagina BarielField, clicca il bottone di unlink. La sfera tornera spostabile.

> ⚠️ **Attenzione**: Scollegare la sfera **disattiva tutte le barriere** immediatamente.

---

## ⚡ Ricarica del Mana

### Territory Mana Drain

Quando attivato dalla pagina BarielField della stone:

- Ogni **5 secondi**, il sistema drena mana dai player presenti nel territorio
- Il mana viene **distribuito equamente** tra tutti i player connessi
- La quantita drenata per tick e configurabile (default: 20 mana)
- Il player riceve un messaggio: *"Territory, drain you mana: -X"*
- Effetto visivo e sonoro sul player quando il mana viene drenato

### Consumo delle barriere:

Le barriere attive consumano mana dalla sfera ogni 5 secondi:

| Barriera | Mana/tick |
|----------|-----------|
| Disable Recall | 5 |
| Disable Gate Travel | 8 |
| Disable Magic Fields | 10 |

> 💡 Se hai tutte e 3 le barriere attive, consumi **23 mana ogni 5 secondi**. Assicurati di avere abbastanza gemme!

---

## ✨ Effetti Visivi

### Colore della sfera

La sfera cambia colore in base alla percentuale di carica:

| Livello carica | Colore |
|---------------|--------|
| 0% (vuota) | Colore naturale |
| 1-14% | Hue 0x256 |
| 15-28% | Hue 0x12A |
| 29-42% | Hue 0x62 |
| 43-57% | Hue 0x1E8 |
| 58-71% | Hue 0x120 |
| 72-85% | Hue 0x58 |
| 86-100% | Hue 0x480 (massimo) |

### Levitazione

Quando la sfera contiene mana e non e spostabile:

- **Oscilla verticalmente** con un'animazione fluida (1 tile su e giu)
- Emette **effetti particellari** magici
- L'animazione si ferma quando il mana si esaurisce

---

## ❓ FAQ

**D: Posso avere piu sfere per un territorio?**
R: No. Ogni Guild Territory Stone puo essere collegata a una sola Crystal Mana Sphere.

**D: Cosa succede se la sfera viene distrutta?**
R: Tutte le barriere si disattivano. Dovrai creare e collegare una nuova sfera.

**D: Le gemme vengono consumate?**
R: No. Le gemme determinano la capacita massima ma non vengono distrutte. Puoi rimuoverle in qualsiasi momento (scollegando prima la sfera).

**D: Chi puo aprire la sfera per aggiungere gemme?**
R: Solo il leader della gilda proprietaria o un GM.

**D: Il mana drain funziona anche sui non-membri?**
R: Si, drena mana da tutti i player presenti nel territorio, non solo i membri della gilda.

---

*Ultimo aggiornamento: Marzo 2026*
*Vedi anche: [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) | [Guild Accountant](#sectionWiki/Guild%20System/Guild%20Accountant)*
