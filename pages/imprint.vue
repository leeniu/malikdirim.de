<script>
export default {
  /* istanbul ignore next */
  head() {
    return {
      title: this.$t('title')
    }
  },
  i18n: {
    messages: {
      de: {
        title: 'Impressum'
      },
      en: {
        title: 'Imprint'
      }
    }
  },
  nuxtI18n: {
    paths: {
      de: '/impressum',
      en: '/imprint'
    }
  }
}
</script>

<template>
  <main>
    <h1>Impressum</h1>
    <h2>Angaben gemäß § 5 TMG</h2>
    <p>
      {{ $config.address.name }}<br />
      {{ $config.address.street }}<br />
      {{ $config.address.city }}<br />
      {{ $config.address.country }}<br />
    </p>
    <h2>Kontakt</h2>
    <p>E-Mail: {{ $config.emails.imprint }}</p>
    <h3>Haftung für Inhalte</h3>
    <p>
      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
      Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
      oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
      Tätigkeit hinweisen.
    </p>
    <p>
      Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
      hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
      Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
      umgehend entfernen.
    </p>
    <h3>Haftung für Links</h3>
    <p>
      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
      können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
      der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
      Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
      erkennbar.
    </p>
    <p>
      Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
      Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
      entfernen.
    </p>
    <h3>Urheberrecht</h3>
    <p>
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
      Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
      Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
      dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
    </p>
    <p>
      Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
      beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
      Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
      Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
    </p>
    <p>
      Die Bild-Darstellungen der Flaggen im Zusammenhang mit der Funktion des Umschaltens der Sprache stammen von
      <a title="Roundicons" target="_blank" rel="noopener noreferrer" href="https://www.flaticon.com/authors/roundicons"
        >Roundicons</a
      >, gefunden bei
      <a target="_blank" title="Flaticon" rel="noopener noreferrer" href="https://www.flaticon.com/"
        >www.flaticon.com</a
      >
      Die fliegende Katze auf der Startseite stammt von
      <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a>, ebenfalls
      gefunden bei
      <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer"
        >www.flaticon.com</a
      >
    </p>
    <p>
      Quelle:
      <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">eRecht24</a>
    </p>
  </main>
</template>
