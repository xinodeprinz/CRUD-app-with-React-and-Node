export const validateFile = (req, file) => {
    if (req.files !== null) {
        if (file in req.files) {
            return true;
        }
    }
    return false;
}

export const randomString = (n) => {
    let string = "";
    const take = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < n; i++) {
        let index = Math.round(Math.random() * take.length);
        string += take[index];
    }
    return string;
}