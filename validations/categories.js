const bodyData = {
    label: {
        in: ["body"],
        notEmpty: {
            errorMessage: 'il titolo è obbligatorio',
            bail: true
        },
        isString: {
            errorMessage: 'Il titolo non può contenere solo da numeri',
            bail: true
        },
        isLength: {
            errorMessage: 'Il titolo deve contenere almeno 5 caratteri',
            options: { min: 5 }
        }
    },
}

module.exports = bodyData;