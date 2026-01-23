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
