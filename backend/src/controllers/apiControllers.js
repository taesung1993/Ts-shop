export const registerProduct = (req, res) => {
    const {success} = req.body;
    if(!success){
        console.log("에러 발생 시킬 듯");
        return res.json({
            error: true
        });
    }
    return res.json({
        success: true
    })
}