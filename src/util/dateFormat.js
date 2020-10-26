const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


export default (date) => {
    const tempDate = new Date(date);
    return `${tempDate.getDate()}  ${monthNames[tempDate.getMonth()]} ${tempDate.getFullYear()}`;

}