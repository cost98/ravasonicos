# Pipeline di Deploy Altervista

## Configurazione

Per utilizzare la pipeline di deploy automatico su Altervista, devi configurare i seguenti **secrets** nel repository GitHub:

### Secrets richiesti

1. **FTP_SERVER**: L'indirizzo del server FTP di Altervista
   - Formato: `ftp.nometuosito.altervista.org`

2. **FTP_USERNAME**: Il tuo username Altervista
   - Di solito coincide con il nome del sito

3. **FTP_PASSWORD**: La password del tuo account Altervista

### Come aggiungere i secrets

1. Vai su GitHub → Il tuo repository
2. Vai su **Settings** → **Secrets and variables** → **Actions**
3. Clicca su **New repository secret**
4. Aggiungi i tre secrets sopra indicati

### ⚠️ IMPORTANTE: Abilitare accesso FTP internazionale

**Altervista blocca le connessioni FTP da nazioni non autorizzate.**

Per permettere a GitHub Actions di connettersi:

1. Accedi al **Pannello di Controllo Altervista**
2. Vai su **Risorse** → **File Manager / FTP**
3. Clicca su **Gestione accessi FTP**
4. Nella sezione "Nazioni consentite":
   - **Opzione 1 (consigliata)**: Abilita almeno **Stati Uniti** e **Europa** (dove si trovano i server GitHub)
   - **Opzione 2**: Abilita **Tutti i paesi** (meno sicuro ma più semplice)
5. Salva le modifiche

**Senza questa configurazione, riceverai l'errore:**
```
FTPError: 530 Autenticazione fallita. Accedi al pannello di controllo di AlterVista 
e aggiungi la nazione da cui ti stai connettendo tra quelle consentite.
```

## Funzionamento

La pipeline si attiva automaticamente:
- Ad ogni push sul branch `main`
- Manualmente tramite il pulsante "Run workflow" nella sezione Actions

Il processo esegue:
1. Checkout del codice
2. Installazione delle dipendenze
3. Build del sito Next.js (esportazione statica)
4. Upload dei file nella cartella `out/` su Altervista via FTP

## Note

- Il sito viene esportato come statico (SSG) compatibile con hosting tradizionali
- Le immagini Next.js sono impostate come `unoptimized` per compatibilità
- I file vengono caricati nella root del server FTP (modifica `server-dir` se necessario)
