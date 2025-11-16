
  
    function calculerPret() {
      let montant = parseFloat(document.getElementById('montant').value);
      let tauxAnnuel = parseFloat(document.getElementById('taux').value);
      let duree = parseInt(document.getElementById('duree').value);

      if (isNaN(montant) || montant <= 0) {
        alert("Veuillez entrer un montant de prêt valide (> 0).");
        return;
      }
      if (isNaN(tauxAnnuel) || tauxAnnuel < 0) {
        alert("Veuillez entrer un taux d'intérêt valide (>= 0).");
        return;
      }
      if (isNaN(duree) || duree <= 0) {
        alert("Veuillez entrer une durée valide en années (> 0).");
        return;
      }

      let r = tauxAnnuel / 100 / 12; // taux mensuel
      let n = duree * 12; // nombre total de paiements

      let M;
      if (r === 0) {
        M = montant / n;
      } else {
        M = montant * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      }

      document.getElementById('resultat').textContent = 
        `Le paiement mensuel est de : ${M.toFixed(2)} FCFA`;
    }
