# 🗺️ UOMapWeaver

*Lo strumento per creare e modificare le mappe di Ultima Online.*

---

## 📜 Panoramica

**UOMapWeaver** è un'applicazione desktop multipiattaforma (Windows, Linux, macOS) per creare e modificare i file mappa di Ultima Online. È sviluppata con .NET 10 e [Avalonia UI](https://avaloniaui.net/).

Le mappe di UO sono salvate in file binari `.mul` difficili da modificare a mano. UOMapWeaver li converte in normali immagini `.bmp`, che si aprono con qualsiasi programma di grafica, e li riconverte quando la modifica è finita.

---

## ⚙️ Come funziona

La mappa è una griglia di blocchi 8×8 tile. Ogni tile ha un **ID di terreno** e una **altitudine Z**. UOMapWeaver produce due immagini:

| Immagine | Cosa contiene |
|---|---|
| **Terrain.bmp** | un pixel per tile, il colore codifica l'ID del terreno |
| **Altitude.bmp** | un pixel per tile, il valore codifica la quota Z |

Si modificano le immagini e si reimportano per ottenere un nuovo `map*.mul`. Lo stesso vale per le statics (alberi, rocce, decorazioni).

---

## 🧰 Strumenti principali

| Strumento | Cosa fa |
|---|---|
| **MUL → BMP** | esporta terreno e altitudine in immagini modificabili |
| **BMP → MUL** | reimporta le immagini nei file mappa |
| **GenStatics** | genera le statics a partire da definizioni di terreno e bioma |
| **Blank BMP** | crea una mappa vuota da preset (Felucca, Trammel, Ilshenar, ...) |
| **Tile Color Map** | costruisce le tabelle colori JSON dai file `.mul` o da XML |
| **Map Copy** | copia regioni rettangolari (terreno e statics) tra mappe |
| **UOP Tools** | estrae e crea archivi `.uop` (mappe, art, gump, suoni) |

Prima di ogni operazione che sovrascrive un file l'app ne crea un backup automatico (massimo 5 per file) e scrive un log delle operazioni.

---

## 📦 Dove trovarlo

Il codice è pubblico su GitHub: [UOCursedSouls/UOMapWeaver](https://github.com/UOCursedSouls/UOMapWeaver). Per compilarlo serve il [.NET 10 SDK](https://dotnet.microsoft.com/download):

```bash
git clone https://github.com/UOCursedSouls/UOMapWeaver.git
cd UOMapWeaver
dotnet run --project UOMapWeaver.App
```

Al primo avvio crea una cartella `UOMapWeaverData` accanto all'eseguibile. Non include file di dati di gioco: profili, palette e definizioni vanno forniti dall'utente. Il README del repository descrive ogni strumento nel dettaglio.
