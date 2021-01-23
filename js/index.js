const DonationList = document.querySelector('#cards');

//setup blood donations list
const setupDonations = (data) => {

    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const donations = doc.data();
            console.log(donations);
            const li =
                `
                <tr>
                    <td class="text-left">${donations.full_name}</td>
                    <td class="text-left">${donations.Age}</td>
                    <td class="text-left">${donations.blood_type}</td>
                    <td class="text-left">${donations.phone}</td>
                </tr>
             `;
            html += li
        });

        if (DonationList) {
            DonationList.innerHTML = html;
        }
    }
}