# 🏗️ Building System
*Costruisci strutture nel territorio della tua gilda con la skill Architecture*

---

## 📋 Indice

- [Panoramica](#panoramica)
- [Skill Architecture](#skill-architecture)
- [Permessi di Building](#permessi-di-building)
- [Banco da Lavoro](#banco-da-lavoro)
- [Building Tool](#building-tool)
- [Crafting degli Statici](#crafting-degli-statici)
- [Categorie e Materiali](#categorie-e-materiali)
- [Durabilita e Qualita](#durabilita-e-qualita)
- [Attaccare gli Statici](#attaccare-gli-statici)
- [Riparazione](#riparazione)
- [Decadimento e Reclaim](#decadimento-e-reclaim)
- [Limiti](#limiti)
- [FAQ](#faq)

---

## 📜 Panoramica

Il **Building System** permette ai giocatori di costruire strutture all'interno dei territori di gilda. Puoi craftare muri, pavimenti, tetti, mobili, luci e molti altri elementi architettonici usando risorse e la nuova skill **Architecture**.

Gli statici costruiti sono oggetti reali nel mondo di gioco: hanno durabilita, possono essere attaccati e distrutti da chiunque, e possono essere spostati, ruotati e bloccati in posizione.

> **Requisiti**: Appartenere a una gilda con un [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) attivo e avere il permesso di building dal leader della gilda.

### Cosa puoi fare:
- Craftare strutture al banco da lavoro (muri, pavimenti, tetti, scale, porte, mobili...)
- Piazzare, spostare e ruotare gli statici nel territorio
- Bloccare gli statici per impedirne lo spostamento
- Riparare strutture danneggiate
- Attaccare e distruggere strutture nemiche

---

## 🎓 Skill Architecture

La **Architecture** e una nuova skill dedicata alla costruzione. E la skill principale del Building System.

| Proprieta | Dettaglio |
|-----------|----------|
| **Stat primaria** | Intelligence |
| **Stat secondaria** | Strength |
| **Come si aumenta** | Usando il banco da lavoro e il building tool |

### Come funziona:

Architecture e la **skill principale** per tutti i craft del building system. Ogni ricetta richiede anche una **skill secondaria** in base al tipo di materiale:

| Materiale | Skill secondaria |
|-----------|-----------------|
| **Legno** (Boards) | Carpentry |
| **Pietra** (Stone) | Mining |
| **Metallo** (Ingots) | Blacksmithy |
| **Meccanica/Altro** | Tinkering |

> 💡 Ad esempio, per costruire un muro in pietra ti servira sia Architecture che Mining ad un livello sufficiente.

---

## 🔐 Permessi di Building

Non tutti i membri della gilda possono costruire. Il **leader della gilda** deve concedere il permesso individualmente.

### Come funziona:

1. Il leader apre la [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) (doppio click)
2. Va alla pagina **"Building"**
3. Clicca **"Grant Build Permission"**
4. Seleziona il giocatore (target)
5. Il giocatore ora puo costruire nel territorio!

### Pagina Building nel pannello di gestione:

| Informazione | Descrizione |
|-------------|-------------|
| **Placed Statics** | Numero di statici piazzati / massimo per territorio |
| **Max Per Player** | Limite di statici per singolo giocatore |
| **Lista giocatori** | Mostra chi ha il permesso e quanti statici ha piazzato |

> ⚠️ Solo il **leader della gilda** puo gestire i permessi di building. I Warlord e gli altri rank non possono farlo.

### Chi puo fare cosa:

| Azione | Chi puo farla |
|--------|--------------|
| **Craftare statici** | Chiunque con permesso building |
| **Piazzare statici** | Chiunque con permesso building |
| **Spostare/ruotare** | Chiunque con permesso building |
| **Bloccare/sbloccare** | Chiunque con permesso building |
| **Attaccare statici** | **Tutti** (anche non membri) |
| **Gestire permessi** | Solo il leader della gilda |

---

## 🔨 Banco da Lavoro

Il **Building Workbench** e il banco da lavoro necessario per craftare gli statici.

| Proprieta | Dettaglio |
|-----------|----------|
| **Grafica** | Banco da carpenteria (hue 2500) |
| **Peso** | 50 stones |
| **Durabilita** | ~500 utilizzi (configurabile) |
| **Come ottenerlo** | Craftabile con Tinkering o Carpentry |

### Regole d'uso:

- Il banco **deve essere posizionato a terra** — non funziona dal backpack
- Devi essere **a portata** (2 tile di distanza)
- **Non puoi usarlo da una mount** — devi smontare
- Devi avere il **permesso di building** nel territorio
- Devi trovarti **dentro il territorio** della guild stone

### Come usarlo:

1. Posiziona il banco a terra nel territorio
2. Smonta dalla mount se sei a cavallo
3. Fai **doppio click** sul banco
4. Si apre il **menu di crafting** con tutte le categorie di statici
5. Seleziona la categoria e l'oggetto che vuoi costruire
6. Il sistema verifica risorse e skill — se tutto ok, il crafting inizia!

> 💡 Ogni utilizzo consuma 1 uso dal banco. Quando gli usi finiscono, il banco si rompe!

---

## 🛠️ Building Tool

Il **Building Tool** e lo strumento per manipolare gli statici gia piazzati.

| Proprieta | Dettaglio |
|-----------|----------|
| **Grafica** | Martello (hue 2500) |
| **Peso** | 5 stones |
| **Durabilita** | ~200 utilizzi (configurabile) |
| **Come ottenerlo** | Craftabile con Tinkering |

### Funzioni:

Fai doppio click sul tool (deve essere nel backpack) per aprire il menu:

| Azione | Descrizione |
|--------|-------------|
| **Place Static** | Piazza uno statico dal backpack nel territorio |
| **Pick Up Static** | Prendi uno statico piazzato (se non bloccato) |
| **Rotate Static** | Ruota lo statico (cambia orientamento) |
| **Lock / Unlock** | Blocca o sblocca lo statico |
| **Attack Static** | Attacca uno statico con la tua arma |

### Note importanti:

- Place, Pick Up, Rotate e Lock/Unlock **consumano 1 uso** dal tool e danno possibilita di aumentare Architecture
- **Attack non consuma usi** dal tool e non richiede alcun permesso — chiunque puo farlo!
- Per piazzare, spostare, ruotare e bloccare serve il **permesso building**
- Non puoi prendere uno statico **bloccato** — sbloccalo prima

---

## ⚒️ Crafting degli Statici

Il processo di crafting crea uno statico nel tuo backpack, pronto per essere piazzato.

### Flusso completo:

```
1. Apri il banco da lavoro (doppio click)
2. Scegli la categoria (es: "Wood Walls")
3. Scegli lo statico specifico
4. Il sistema verifica:
   - Hai abbastanza Architecture?
   - Hai abbastanza skill secondaria?
   - Hai le risorse necessarie?
5. Se tutto ok → crafting in corso...
6. Successo → lo statico appare nel backpack
7. Usa il Building Tool → "Place Static" per piazzarlo
```

### Qualita del craft:

Come per tutti i sistemi di crafting di UO, il risultato puo essere:

| Qualita | Effetto |
|---------|---------|
| **Below Average** | Durabilita ridotta |
| **Normal** | Durabilita standard |
| **Exceptional** | Durabilita **+50%**, nome del crafter impresso |

---

## 📦 Categorie e Materiali

Gli statici sono organizzati in categorie, ognuna con il proprio materiale e skill secondaria.

### Strutture in Legno (Boards + Carpentry)

| Categoria | Risorse | Architecture | Carpentry |
|-----------|---------|-------------|-----------|
| **Wood Floors** | 5-8 Boards | 20-35 | 20-35 |
| **Wood Walls** | 10-14 Boards | 30-40 | 30-40 |
| **Roofs** | 8-10 Boards | 40-50 | 40-50 |
| **Furniture** | 10-14 Boards | 35-45 | 35-45 |
| **Fences** | 8-9 Boards | 25-30 | 25-30 |

### Strutture in Pietra (Stone + Mining)

| Categoria | Risorse | Architecture | Mining |
|-----------|---------|-------------|--------|
| **Stone Floors** | 5 Stone | 25 | 25 |
| **Stone Walls** | 10-12 Stone | 35-40 | 35-40 |
| **Stairs** | 8-10 Stone | 40-50 | 40-50 |
| **Decorative Rocks** | 6-8 Stone | 20-30 | 20-30 |

### Strutture in Metallo (Ingots + Blacksmithy/Tinkering)

| Categoria | Risorse | Architecture | Skill |
|-----------|---------|-------------|-------|
| **Metal Doors** | 20-25 Ingots | 50-55 | Blacksmithy 50-55 |
| **Iron Gates** | 25 Ingots | 55 | Blacksmithy 55 |
| **Lights** (lanterne, torce) | 5-8 Ingots | 30-40 | Tinkering 30-40 |

---

## 💪 Durabilita e Qualita

Ogni statico costruito ha **HitPoints** (punti vita) che ne determinano la resistenza.

### Calcolo durabilita:

La durabilita base dipende da due fattori:

**1. Tipo di materiale:**

| Materiale | Bonus |
|-----------|-------|
| **Metallo** | x1.5 |
| **Pietra** | x1.3 |
| **Legno** | x1.0 |
| **Stoffa** | x0.6 |
| **Altro** | x0.8 |

**2. Qualita del craft:**

| Qualita | Bonus |
|---------|-------|
| **Normal** | x1.0 |
| **Exceptional** | x1.5 |

### Esempio:

Uno statico con 100 HP base, in **pietra**, qualita **exceptional**:
```
100 x 1.3 (pietra) x 1.5 (exceptional) = 195 HP
```

### Tooltip:

Ogni statico mostra nel tooltip:
- Qualita (se exceptional)
- Nome del crafter
- Durabilita attuale e massima (es: "Durability: 150/195")
- Stato "Locked" se bloccato
- Avviso "Decaying" se il territorio e stato perso

---

## ⚔️ Attaccare gli Statici

**Chiunque** puo attaccare uno statico costruito — non serve essere nella stessa gilda ne avere permessi.

### Come attaccare:

1. Usa il **Building Tool** → "Attack Static"
2. Seleziona lo statico da colpire
3. Il danno dipende dalla tua arma e dal materiale dello statico

### Calcolo danno:

```
Danno = Danno arma - Armatura dello statico
(minimo 1 danno per colpo)
```

**Armatura per materiale:**

| Materiale | Armatura |
|-----------|---------|
| **Metallo** | 10 |
| **Pietra** | 7 |
| **Legno** | 3 |
| **Stoffa** | 1 |
| **Altro** | 2 |

> 💡 Le armi pesanti (asce, mazze) fanno piu danno alle strutture. Usare i pugni fa solo 1-5 danni.

### Distruzione:

Quando gli HP arrivano a **0**, lo statico viene **distrutto** con un effetto visivo e sonoro. La distruzione e permanente — lo statico e perso per sempre.

---

## 🔧 Riparazione

Gli statici danneggiati possono essere riparati usando il banco da lavoro.

### Come riparare:

1. Apri il banco da lavoro
2. Seleziona l'opzione **Repair**
3. Seleziona lo statico da riparare
4. Servono risorse (una frazione del costo originale) e un check di Architecture

### Note:

- La riparazione ripristina gli **HitPoints** fino al massimo
- Costa risorse ma meno rispetto a craftare uno nuovo
- Richiede un check di Architecture

---

## ⏳ Decadimento e Reclaim

Quando una [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) viene distrutta o rimossa, gli statici costruiti nel territorio non vengono eliminati immediatamente.

### Decadimento:

| Parametro | Valore |
|-----------|--------|
| **Velocita decay** | ~1 HP ogni 22 ore |
| **Tempo totale (legno)** | Circa **3 mesi** (100 HP base) |
| **Tempo totale (metallo exc.)** | Circa **7 mesi** (225 HP) |

Quando la stone viene distrutta:
1. Tutti gli statici collegati diventano **orfani**
2. Inizia un **timer di decadimento** molto lento
3. Gli statici perdono HP gradualmente nel tempo
4. Quando HP arriva a 0 → lo statico si distrugge

> 💡 Il tooltip dello statico mostra l'avviso "Decaying — no territory protection" quando e in decadimento.

### Reclaim (Recupero):

Se un'altra gilda piazza una **nuova Guild Territory Stone** e gli statici orfani si trovano dentro il nuovo territorio:

1. Il **decadimento si ferma** immediatamente
2. Gli statici diventano **proprieta della nuova gilda**
3. Qualsiasi membro con permesso building puo gestirli

> 💡 Questo significa che conquistare un territorio abbandonato ti permette di recuperare le strutture esistenti!

---

## 📊 Limiti

Il sistema ha dei limiti configurabili per bilanciare il gameplay.

| Limite | Valore Default |
|--------|---------------|
| **Max statici per territorio** | 200 |
| **Max statici per giocatore** | 50 |
| **Usi banco da lavoro** | 500 |
| **Usi building tool** | 200 |

Se raggiungi il limite, non potrai piazzare nuovi statici fino a quando non ne rimuovi o ne vengono distrutti.

---

## ❓ FAQ

**D: Dove posso costruire?**
R: Solo all'interno del territorio di una Guild Territory Stone dove hai il permesso di building dal leader della gilda.

**D: Posso costruire ovunque nel territorio?**
R: Si, puoi piazzare statici su qualsiasi tile dentro i confini del territorio.

**D: Cosa succede se mi viene revocato il permesso?**
R: Non potrai piu piazzare, spostare o modificare statici. Quelli gia piazzati restano al loro posto.

**D: I nemici possono distruggere le mie costruzioni?**
R: Si. Chiunque puo attaccare gli statici costruiti. Proteggi il tuo territorio con le guardie!

**D: Posso spostare statici costruiti da un altro membro?**
R: Si, chiunque abbia il permesso di building puo spostare qualsiasi statico nel territorio (se non e bloccato).

**D: Cosa succede alla durabilita del banco da lavoro e del tool?**
R: Si consumano ad ogni utilizzo. Quando gli usi finiscono, l'oggetto si rompe e devi craftarne uno nuovo.

**D: Posso usare il banco dal backpack?**
R: No. Il banco DEVE essere posizionato a terra e devi essere smontato dalla cavalcatura.

**D: La stone e stata distrutta — i miei statici sono persi?**
R: Non subito! Il decadimento e molto lento (~1 mese). Se un'altra gilda piazza una stone nello stesso territorio, gli statici vengono recuperati.

**D: Come posso proteggere le costruzioni dai nemici?**
R: Usa le guardie del territorio, le barriere magiche, e posiziona gli statici importanti lontano dai confini.

---

*Ultimo aggiornamento: Aprile 2026*
*Vedi anche: [Guild Territory Stone](#sectionWiki/Guild%20System/Guild%20Territory%20Stone) | [Crystal Mana Sphere](#sectionWiki/Guild%20System/Crystal%20Mana%20Sphere)*
