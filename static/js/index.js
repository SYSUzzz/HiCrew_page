window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  // Navbar burger toggle
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Smooth scroll for navbar links
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 60
      }, 500);
    }
  });

  // Ablation chart
  var ctx = document.getElementById('ablationChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['HiCrew (Full)', 'w/o Planning Layer', 'w/o Q-Aware\nCaptioning', 'w/o Hybrid Tree'],
        datasets: [{
          label: 'Accuracy (%)',
          data: [71.6, 62.0, 59.2, 58.7],
          borderColor: '#4F46E5',
          backgroundColor: 'rgba(79, 70, 229, 0.1)',
          borderWidth: 3,
          pointBackgroundColor: ['#4F46E5', '#10B981', '#0EA5E9', '#EF4444'],
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 7,
          pointHoverRadius: 9,
          fill: true,
          tension: 0.15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(context) {
                var val = context.parsed.y;
                var delta = val - 71.6;
                var deltaStr = delta === 0 ? '' : ' (' + delta.toFixed(1) + '%)';
                return 'Accuracy: ' + val + '%' + deltaStr;
              }
            }
          }
        },
        scales: {
          y: {
            min: 50,
            max: 76,
            title: {
              display: true,
              text: 'Accuracy (%)',
              font: { size: 13, weight: 'bold' }
            },
            grid: { color: 'rgba(0,0,0,0.06)' }
          },
          x: {
            grid: { display: false },
            ticks: {
              font: { size: 11 },
              maxRotation: 0
            }
          }
        }
      }
    });
  }
});
