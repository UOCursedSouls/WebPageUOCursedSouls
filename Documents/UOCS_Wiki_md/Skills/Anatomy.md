# Guida alla Skill di Anatomia - Ultima Online

## 📋 Indice
- [Introduzione](#introduzione)
- [Descrizione della Skill](#descrizione-della-skill)
- [Meccaniche Base](#meccaniche-base)
- [Training della Skill](#training-della-skill)
- [Usi Pratici](#usi-pratici)
- [Comandi](#comandi)
- [Build Correlate](#build-correlate)
- [Consigli e Strategie](#consigli-e-strategie)

## 🎯 Introduzione

**Anatomia** (Anatomy) è una delle skill fondamentali in Ultima Online, appartenente alla categoria delle *Skill di Guerra*. Questa skill permette di studiare la struttura fisica degli avversari per infliggere danni più letali.

**Difficoltà**: Media
**Categoria**: Skill di Guerra
**Skill Cap**: 100.0
**Stat Primaria**: Intelligence

## 🔍 Descrizione della Skill

L'Anatomia aumenta la precisione e il danno inflitto durante il combattimento. Maggiore è il livello di Anatomia, maggiore sarà la possibilità di colpire gli avversari e infliggere danni critici.

### Benefici Principali:
- **Aumento della Chance di Colpire** (Hit Chance)
- **Bonus al Danno** (Damage Increase)
- **Sinergia con altre skill curative**

## ⚙️ Meccaniche Base

### Formula del Bonus di Danno
```
Bonus Danno = (Livello Anatomia / 2) + (Livello Tactics / 2)
```
*Esempio: Anatomia 100.0 + Tactics 100.0 = +100% bonus danno*

### Hit Chance Increase
```
Bonus Hit Chance = Livello Anatomia / 2
```
*Esempio: Anatomia 100.0 = +50% chance di colpire*

### Interazione con Healing
Con la skill **Healing** o **Veterinary**:
- Anatomia 60.0+ migliora l'efficacia delle cure
- Anatomia 80.0+ permette di diagnosticare lo stato di salute

## 📈 Training della Skill

### Livelli 0-30 (Novizio)
- **Metodo**: Usare la skill su animali e mostri deboli
- **Comando**: `.anatomy` o `.anatomy [target]`
- **Consiglio**: Allenarsi su animali domestici o creature passive

### Livelli 30-70 (Apprendista)
- **Metodo**: Uccidere creature di media difficoltà
- **Miglior Pratica**: Combattere mentre si usa la skill attivamente
- **Location Consigliate**:
  - Foreste (Orchi, Troll)
  - Cimiteri (Zombie, Scheletri)
  - Dungeon di basso livello

### Livelli 70-100 (Maestro)
- **Metodo**: Combattere creature forti e giocatori
- **Massimizzazione**: Usare in combo con Tactics e Weapon Skill
- **Macro di Training** (esempio):
```
!Loop
  WaitForTarget
  Target! 'lastattack'
  UseSkill Anatomy
  Pause 2000
```

## 💡 Usi Pratici

### In Combattimento
1. **Pre-battle Analysis**: Usa Anatomy sull'avversario prima dello scontro
2. **Mid-fight**: Mantieni la skill attiva durante il combattimento
3. **Team Support**: Aiuta i compagni identificando punti deboli nemici

### Fuori dal Combattimento
- **Diagnostica Salute**: Valuta la salute di creature e giocatori
- **Training Medico**: Supporta le skill Healing/Resurrection
- **Valutazione Nemici**: Determina la forza approssimativa degli avversari

## ⌨️ Comandi

### Comandi Base
```
.anatomy                  - Usa Anatomy su te stesso
.anatomy [nome]           - Usa Anatomy su un target specifico
.stats                    - Mostra bonus da Anatomy (se abilitato)
```

### Macro Utili
```
// Macro Auto-Target Enemy
UseSkill Anatomy
WaitForTarget
TargetNearestEnemy
Delay 1s

// Macro PvP
UseSkill Anatomy
WaitForTarget
TargetLastAttack
Delay 2s
```

## ⚔️ Build Correlate

### Build da Guerriero (Warrior)
```
Anatomy: 100.0
Tactics: 100.0
Swordsmanship: 100.0
Healing: 100.0
Parrying: 100.0
Resist: 100.0
Anatomy + Tactics = Danno Massimo
```

### Build da Guerriero-Mago (Warrior Mage)
```
Anatomy: 100.0
Tactics: 100.0
Magery: 100.0
Meditation: 100.0
Resist: 100.0
Eval Int: 100.0
```

### Build da Paladino (Paladin)
```
Anatomy: 100.0
Tactics: 100.0
Chivalry: 100.0
Healing: 100.0
Parrying: 100.0
Resist: 100.0
```

## 🏆 Consigli e Strategie

### Consigli Generali
1. **Train in Coppia**: Allena Anatomy insieme a Tactics
2. **Usa Armi Veloci**: Più colpi = più chance di gain
3. **Non Trascurare Healing**: Combina con una skill curativa
4. **Monitora i Gain**: Usa `.skill` per tracciare i progressi

### Strategie PvM (Player vs Monster)
- **Contro Boss**: Anatomy è cruciale per il danno extra
- **Farm Efficiente**: Riduce il tempo di uccisione
- **Sopravvivenza**: Meno colpi mancati = meno danni subiti

### Strategie PvP (Player vs Player)
- **Duelli**: Usa sempre Anatomy sull'avversario
- **Team Fights**: Focus su target con alta resistenza
- **Hit Chance**: Essenziale contro avversari con alta difesa

### Trucchi Avanzati
1. **Power Scroll 120**: Considera di salire oltre 100.0
2. **Jewelry Imbuing**: Cerca gioielli con bonus ad Anatomy
3. **Training Dummy**: Usa i dummy nelle case per training sicuro
4. **Skill Mastery**: Sblocca abilità speciali a skill elevata

## ❓ FAQ (Domande Frequenti)

**Q: Anatomy funziona con le armi da mischia e a distanza?**
A: Sì, funziona con tutte le armi.

**Q: Devo tenere Anatomy attiva durante il combattimento?**
A: Sì, i bonus si applicano solo quando la skill è attiva.

**Q: Anatomy influenza il danno magico?**
A: No, influisce solo sul danno fisico.

**Q: Qual è il livello minimo utile per PvP?**
A: Almeno 90.0 per essere competitivi.

**Q: Posso usare Anatomy su alleati?**
A: Sì, per diagnosticare il loro stato di salute.

## 📊 Tabelle di Riferimento

### Bonus per Livello
| Livello Anatomy | Bonus Danno | Bonus Hit Chance |
|-----------------|-------------|------------------|
| 50.0            | +25%        | +25%             |
| 80.0            | +40%        | +40%             |
| 100.0           | +50%        | +50%             |
| 120.0           | +60%        | +60%             |

### Creature per Training
| Livello | Creature Consigliate          | Location               |
|---------|-------------------------------|------------------------|
| 0-30    | Cani, Gatti, Pecore           | Città, Fattorie        |
| 30-60   | Orchi, Scheletri, Lizardmen   | Foreste, Dungeon Bassi |
| 60-80   | Troll, Ogre, Ettin            | Dungeon Medi           |
| 80-100  | Draghi, Demoni, Balron        | Dungeon Alti, Shame    |

---

*Ultimo aggiornamento: Patch 7.0.90.0*
*Skill ID: 1 (Anatomy)*
*Nota: I valori possono variare tra shard. Verifica sempre le specifiche del tuo server.*

---

**💡 Pro Tip**: Anatomy è una skill che paga sempre nel lungo termine. Investici tempo e risorse per diventare un combattente temibile in qualsiasi scenario!