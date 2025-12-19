const {Router} = require("express");
const router = Router();

router.get("/wellcome", (req, res) => {
    res.send("Página de inicio de sesión")
});


router.get("/start", (req, res) => {
    res.send("Página de inicio")
});


router.get("/generalPets", (req, res) => {
    res.send("Página general de mascotas")
});


router.get("/previewPets", (req, res) => {
    res.send("Página de vista previa de mascota")
});


router.get("/generalPetSitters", (req, res) => {
    res.send("Página general de cuidadores de mascotas")
});


router.get("/PreviewPetSitters", (req, res) => {
    res.send("Página de vista previa de cuidadores de mascotas")
});


module.exports = router;