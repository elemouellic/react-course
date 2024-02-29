import { useState } from 'react';

const contactsTable = [{
    "id": 1,
    "first_name": "Elroy",
    "last_name": "Daltrey",
    "email": "edaltrey0@google.cn",
    "gender": "Male",
    "avatarUrl":"https://randomuser.me/api/portraits/men/1.jpg"
}, {
    "id": 2,
    "first_name": "Jamill",
    "last_name": "Silberschatz",
    "email": "jsilberschatz1@accuweather.com",
    "gender": "Male",
    "avatarUrl":"https://randomuser.me/api/portraits/men/2.jpg"
}, {
    "id": 3,
    "first_name": "Dwain",
    "last_name": "Herrieven",
    "email": "dherrieven2@wisc.edu",
    "gender": "Male",
    "avatarUrl":"https://randomuser.me/api/portraits/men/3.jpg"
}, {
    "id": 4,
    "first_name": "Angel",
    "last_name": "Ciccotto",
    "email": "aciccotto3@intel.com",
    "gender": "Male",
    "avatarUrl":"https://randomuser.me/api/portraits/men/4.jpg"
}, {
    "id": 5,
    "first_name": "Christoforo",
    "last_name": "Leworthy",
    "email": "cleworthy4@washingtonpost.com",
    "gender": "Male",
    "avatarUrl":"https://randomuser.me/api/portraits/men/5.jpg"
}, {
    "id": 6,
    "first_name": "Jarred",
    "last_name": "Mordie",
    "email": "jmordie5@columbia.edu",
    "gender": "Polygender",
    "avatarUrl":"https://randomuser.me/api/portraits/women/6.jpg"
}, {
    "id": 7,
    "first_name": "Neron",
    "last_name": "Veregan",
    "email": "nveregan6@bigcartel.com",
    "gender": "Male",
    "avatarUrl":"https://randomuser.me/api/portraits/men/7.jpg"
}, {
    "id": 8,
    "first_name": "Ashly",
    "last_name": "Wasielewski",
    "email": "awasielewski7@gnu.org",
    "gender": "Female",
    "avatarUrl":"https://randomuser.me/api/portraits/women/8.jpg"
}, {
    "id": 9,
    "first_name": "Johnath",
    "last_name": "Densham",
    "email": "jdensham8@geocities.jp",
    "gender": "Female",
    "avatarUrl":"https://randomuser.me/api/portraits/women/9.jpg"
}, {
    "id": 10,
    "first_name": "Amitie",
    "last_name": "Darker",
    "email": "adarker9@360.cn",
    "gender": "Female",
    "avatarUrl":"https://randomuser.me/api/portraits/women/10.jpg"
}]

function getContact(contact) {
    return (
        <div>
            <h2>{contact.first_name} {contact.last_name}</h2>
            <p>Email: {contact.email}</p>
            <p>Gender: {contact.gender}</p>
            <img src={contact.avatarUrl} alt={`Avatar de ${contact.first_name} ${contact.last_name}`} />
        </div>
    );
}

// Définition de la fonction Contacts
function Contacts() {
    // Utilisation du Hook d'état useState pour créer une variable d'état selectedContact et une fonction pour la mettre à jour setSelectedContact.
    // L'état initial est le premier contact du tableau contactsTable.
    const [selectedContact, setSelectedContact] = useState(contactsTable[0]);

    // Définition de la fonction handleSelectChange qui sera appelée lorsque l'utilisateur change la sélection dans le menu déroulant.
    const handleSelectChange = (event) => {
        // Récupération de l'ID du contact sélectionné à partir de la valeur de l'élément sélectionné dans le menu déroulant.
        const selectedId = event.target.value;
        // Recherche du contact correspondant dans le tableau contactsTable en utilisant la méthode find.
        const selectedContact = contactsTable.find(contact => contact.id === Number(selectedId));
        // Mise à jour de l'état selectedContact avec le contact sélectionné.
        setSelectedContact(selectedContact);
    };

    // La fonction Contacts renvoie un élément JSX qui contient un menu déroulant avec tous les contacts et les informations du contact sélectionné.
    return (
        <div>
            <select onChange={handleSelectChange}>
                {/* Pour chaque contact dans le tableau contactsTable, un élément option est créé avec comme valeur l'ID du contact et comme contenu le prénom et le nom du contact. */}
                {contactsTable.map((contact) => (
                    <option key={contact.id} value={contact.id}>
                        {contact.first_name} {contact.last_name}
                    </option>
                ))}
            </select>
            {/* Appel de la fonction getContact avec le contact sélectionné pour afficher ses informations. */}
            {getContact(selectedContact)}
        </div>
    );
}

// Exportation de la fonction Contacts pour pouvoir l'utiliser dans d'autres fichiers.
export default Contacts;