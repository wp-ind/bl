document.addEventListener('DOMContentLoaded', function() {
    const clientName = 'klien1'; // Pastikan nama klien benar

    fetch(`https://root.aktif.my.id/wp-json/whuzzz/v1/seo?client=${clientName}`)
        .then(response => {
            console.log('Response object:', response); // Lihat respons mentah dari server
            return response.json(); // Mengonversi respons menjadi JSON
        })
        .then(data => {
            console.log('Data received:', data); // Lihat data yang diterima setelah parsing JSON
            const footer = document.querySelector('footer');
            if (footer && data.length > 0) {
                data.forEach(backlink => {
                    const link = document.createElement('a');
                    link.href = backlink.url;
                    link.textContent = backlink.name;
                    link.style.display = 'block'; // Menampilkan link per baris di footer
                    footer.appendChild(link);
                });
            } else {
                console.log('No data found or empty array');
            }
        })
        .catch(error => console.error('Error fetching backlinks:', error));
});
