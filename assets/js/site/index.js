$(document).ready(function(){
    $("#name").focus();

    //vars from Personal Data.html
    let valueName = "";
    let valueProvincia = "";
    let valueCiudad = "";
    let valueSector = "";
    let valueCalle = "";
    let valueCarrera = "";
 
    // vars from selection software
    let softwareFundamentosValue = "";
    let softwareProgramacionValue = "";
    let softwareDataBaseValue = "";
    let softwareDiseñoValue = "";
    let softwareMineriaValue = "";
    let SoftwareEticaValue = "";

    // vars from selection Multimedia
    let multimediaAnimacionValue = $("#radio-multimedia-animacion input[type='radio']:checked").val();
    let multimediaModeladoValue = $("#radio-multimedia-modelado input[type='radio']:checked").val();
    let multimediaProduccionValue = $("#radio-multimedia-produccion input[type='radio']:checked").val();
    let multimediaDesktopValue = $("#radio-multimedia-desktop input[type='radio']:checked").val();
    let multimedia3DValue = $("#radio-multimedia-3D input[type='radio']:checked").val();
    let multimediaEticaValue = $("#radio-multimedia-etica input[type='radio']:checked").val();

    //vars from selection Redes
    let redesSistemasValue = $("#radio-redes-sistema input[type='radio']:checked").val();
    let resdesRedesInalambricasValue = $("#radio-redes-redesInalambricas input[type='radio']:checked").val();
    let redesEnrutamientoValue = $("#radio-redes-enrutamiento input[type='radio']:checked").val();
    let redesTecnologiasWANValue = $("#radio-redes-tecnologiasWan input[type='radio']:checked").val();
    let redesAdministracionValue = $("#radio-redes-administracion input[type='radio']:checked").val();
    let redesEticaValue = $("#radio-redes-etica input[type='radio']:checked").val();



    // Array
    let arraySelection;

    // Events
    $("#container-main").on("click","#btn-save",function(){
        Save();
    })

    $("#btn-clear").on("click", function(){
        Clear()
    })

    $("#container-main").on("click","#btn-accept",function(){
        Accept();        
    })

    $("#container-main").on("click","#page-1",function(){
        GeneratePersonalDataForm();        
    })

    $("#container-main").on("click","#page-2",function(){
        SelectionNavegation();        
    })

    $("#container-main").on("click","#page-3",function(){
        Confirmation();       
    })

    $("#container-main").on("click","#btn-finalize",function(){
        $.confirm({
            title: "¡Espera!",
            content: "¿Seguro que desea finalizar la inscripción?",
            buttons: {
              cancel: {
                text: "Cancelar",
                btnClass: "btn btn-danger",
                action: function () {},
              },
              confirm: {
                text: "Aceptar",
                btnClass: "btn btn-success",
                action: function () {
                    toastr.success("Su inscripción se procesó satisfactoriamente", "Notification", {TimeOut: 1});
                  GeneratePersonalDataForm();
                  Clear();
                },
              },
            },
        });     
    })



    // Methods
    function ValidateDataPersonal(){
        var isValid = true;
        
        valueName = $("#name").val();
        valueProvincia = $("#provincia").val();
        valueCiudad = $("#ciudad").val();
        valueSector = $("#sector").val();
        valueCalle = $("#calle").val();
        valueCarrera = $("#carrera").val();

        if(valueName == "" || valueName == null || valueName == undefined) {
            isValid = false;
            $("#name").addClass("input-error");
            $("#name").removeClass("input-success");
        } else{
            $("#name").addClass("input-success");
            $("#name").removeClass("input-error");
        }

        if(valueProvincia == "" || valueProvincia == null || valueProvincia == undefined) {
            isValid = false;
            $("#provincia").addClass("input-error");
            $("#provincia").removeClass("input-success");
        } else{
            $("#provincia").addClass("input-success");
            $("#provincia").removeClass("input-error");
        }

        if(valueCiudad == "" || valueCiudad == null || valueCiudad == undefined) {
            isValid = false;
            $("#ciudad").addClass("input-error");
            $("#ciudad").removeClass("input-success");
        } else{
            $("#ciudad").addClass("input-success");
            $("#ciudad").removeClass("input-error");
        }

        if(valueSector == "" || valueSector == null || valueSector == undefined){
            isValid = false;
            $("#sector").addClass("input-error");
            $("#sector").removeClass("input-success")
        } else {
            $("#sector").addClass("input-success");
            $("#sector").removeClass("input-error");
        }

        if(valueCalle == "" || valueCalle == null || valueCalle == undefined) {
            isValid = false;
            $("#calle").addClass("input-error");
            $("#calle").removeClass("input-success");
        } else{
            $("#calle").addClass("input-success");
            $("#calle").removeClass("input-error");
        }

        if(valueCarrera == "" || valueCarrera == null || valueCarrera == undefined) {
            isValid = false;
            $("#carrera").addClass("input-error");
            $("#carrera").removeClass("input-success");
        } else{
            $("#carrera").addClass("input-success");
            $("#carrera").removeClass("input-error");
        }

        return isValid;
    }


    function Save(){

        if(ValidateDataPersonal()){

            if(valueCarrera == "Software"){
                toastr.success("Datos registrados correctamente", "Notification", {setTimeout:1});
            SelectionSoftware();
            } else if(valueCarrera == "Multimedia"){
                toastr.success("Datos registrados correctamente", "Notification", {setTimeout:1});
                SelectionMultimedia();
            } else {
                toastr.success("Datos registrados correctamente", "Notification", {setTimeout:1});
                SelectionRedes();
            }

        } else{
            toastr.error("Debe rellenar todos los campos", "Oops, ha ocurrido un error", {setTimeout:10});
        }
    }

    function SoftwareValidateSelection(){
        softwareFundamentosValue = $("#radio-software-fundamentos input[type='radio']:checked").val();
        softwareProgramacionValue = $("#radio-software-programacion input[type='radio']:checked").val();
        softwareDataBaseValue = $("#radio-software-dataBase input[type='radio']:checked").val();
        softwareDiseñoValue = $("#radio-software-diseño input[type='radio']:checked").val();
        softwareMineriaValue = $("#radio-software-mineria input[type='radio']:checked").val();
        SoftwareEticaValue = $("#radio-software-etica input[type='radio']:checked").val();
        var isValid = true;

        if(softwareFundamentosValue == "" || softwareFundamentosValue == null || softwareFundamentosValue == undefined ){
            isValid = false;
            $("#radio-software-fundamentos").addClass("input-error");
            $("#radio-software-fundamentos").removeClass("input-success");
        } else{
            $("#radio-software-fundamentos").addClass("input-success");
            $("#radio-software-fundamentos").removeClass("input-error");
        }

        if(softwareProgramacionValue == "" || softwareProgramacionValue == null || softwareProgramacionValue == undefined ){
            isValid = false;
            $("#radio-software-programacion").addClass("input-error");
            $("#radio-software-programacion").removeClass("input-success");
        } else{
            $("#radio-software-programacion").addClass("input-success");
            $("#radio-software-programacion").removeClass("input-error");
        }

        if(softwareDataBaseValue == "" || softwareDataBaseValue == null || softwareDataBaseValue == undefined ){
            isValid = false;
            $("#radio-software-dataBase").addClass("input-error");
            $("#radio-software-dataBase").removeClass("input-success");
        } else{
            $("#radio-software-dataBase").addClass("input-success");
            $("#radio-software-dataBase").removeClass("input-error");
        }

        if(softwareDiseñoValue == "" || softwareDiseñoValue == null || softwareDiseñoValue == undefined ){
            isValid = false;
            $("#radio-software-diseño").addClass("input-error");
            $("#radio-software-diseño").removeClass("input-success");
        } else{
            $("#radio-software-diseño").addClass("input-success");
            $("#radio-software-diseño").removeClass("input-error");
        }

        if(softwareMineriaValue == "" || softwareMineriaValue == null || softwareMineriaValue == undefined ){
            isValid = false;
            $("#radio-software-mineria").addClass("input-error");
            $("#radio-software-mineria").removeClass("input-success");
        } else{
            $("#radio-software-mineria").addClass("input-success");
            $("#radio-software-mineria").removeClass("input-error");
        }

        if(SoftwareEticaValue == "" || SoftwareEticaValue == null || SoftwareEticaValue == undefined ){
            isValid = false;
            $("#radio-software-etica").addClass("input-error");
            $("#radio-software-etica").removeClass("input-success");
        } else{
            $("#radio-software-etica").addClass("input-success");
            $("#radio-software-etica").removeClass("input-error");
        }

        return isValid;
    }

    function MultimediaValidateSelection(){
        multimediaAnimacionValue = $("#radio-multimedia-animacion input[type='radio']:checked").val();
        multimediaModeladoValue = $("#radio-multimedia-modelado input[type='radio']:checked").val();
        multimediaProduccionValue = $("#radio-multimedia-produccion input[type='radio']:checked").val();
        multimediaDesktopValue = $("#radio-multimedia-desktop input[type='radio']:checked").val();
        multimedia3DValue = $("#radio-multimedia-3D input[type='radio']:checked").val();
        multimediaEticaValue = $("#radio-multimedia-etica input[type='radio']:checked").val();
        var isValid = true;

        if(multimediaAnimacionValue == "" || multimediaAnimacionValue == null || multimediaAnimacionValue == undefined ){
            isValid = false;
            $("#radio-multimedia-animacion").addClass("input-error");
            $("#radio-multimedia-animacion").removeClass("input-success");
        } else{
            $("#radio-multimedia-animacion").addClass("input-success");
            $("#radio-multimedia-animacion").removeClass("input-error");
        }

        if(multimediaModeladoValue == "" || multimediaModeladoValue == null || multimediaModeladoValue == undefined ){
            isValid = false;
            $("#radio-multimedia-modelado").addClass("input-error");
            $("#radio-multimedia-modelado").removeClass("input-success");
        } else{
            $("#radio-multimedia-modelado").addClass("input-success");
            $("#radio-multimedia-modelado").removeClass("input-error");
        }

        if(multimediaProduccionValue == "" || multimediaProduccionValue == null || multimediaProduccionValue == undefined ){
            isValid = false;
            $("#radio-multimedia-produccion").addClass("input-error");
            $("#radio-multimedia-produccion").removeClass("input-success");
        } else{
            $("#radio-multimedia-produccion").addClass("input-success");
            $("#radio-multimedia-produccion").removeClass("input-error");
        }

        if(multimediaDesktopValue == "" || multimediaDesktopValue == null || multimediaDesktopValue == undefined ){
            isValid = false;
            $("#radio-multimedia-desktop").addClass("input-error");
            $("#radio-multimedia-desktop").removeClass("input-success");
        } else{
            $("#radio-multimedia-desktop").addClass("input-success");
            $("#radio-multimedia-desktop").removeClass("input-error");
        }

        if(multimedia3DValue == "" || multimedia3DValue == null || multimedia3DValue == undefined ){
            isValid = false;
            $("#radio-multimedia-3D").addClass("input-error");
            $("#radio-multimedia-3D").removeClass("input-success");
        } else{
            $("#radio-multimedia-3D").addClass("input-success");
            $("#radio-multimedia-3D").removeClass("input-error");
        }

        if(multimediaEticaValue == "" || multimediaEticaValue == null || multimediaEticaValue == undefined ){
            isValid = false;
            $("#radio-multimedia-etica").addClass("input-error");
            $("#radio-multimedia-etica").removeClass("input-success");
        } else{
            $("#radio-multimedia-etica").addClass("input-success");
            $("#radio-multimedia-etica").removeClass("input-error");
        }

        return isValid;
    }

    function RedesValidateSelection(){
        redesSistemasValue = $("#radio-redes-sistema input[type='radio']:checked").val();
        resdesRedesInalambricasValue = $("#radio-redes-redesInalambricas input[type='radio']:checked").val();
        redesEnrutamientoValue = $("#radio-redes-enrutamiento input[type='radio']:checked").val();
        redesTecnologiasWANValue = $("#radio-redes-tecnologiasWan input[type='radio']:checked").val();
        redesAdministracionValue = $("#radio-redes-administracion input[type='radio']:checked").val();
        redesEticaValue = $("#radio-redes-etica input[type='radio']:checked").val();
        var isValid = true;

        if(redesSistemasValue == "" || redesSistemasValue == null || redesSistemasValue == undefined ){
            isValid = false;
            $("#radio-redes-sistema").addClass("input-error");
            $("#radio-redes-sistema").removeClass("input-success");
        } else{
            $("#radio-redes-sistema").addClass("input-success");
            $("#radio-redes-sistema").removeClass("input-error");
        }

        if(resdesRedesInalambricasValue == "" || resdesRedesInalambricasValue == null || resdesRedesInalambricasValue == undefined ){
            isValid = false;
            $("#radio-redes-redesInalambricas").addClass("input-error");
            $("#radio-redes-redesInalambricas").removeClass("input-success");
        } else{
            $("#radio-redes-redesInalambricas").addClass("input-success");
            $("#radio-redes-redesInalambricas").removeClass("input-error");
        }

        if(redesEnrutamientoValue == "" || redesEnrutamientoValue == null || redesEnrutamientoValue == undefined ){
            isValid = false;
            $("#radio-redes-enrutamiento").addClass("input-error");
            $("#radio-redes-enrutamiento").removeClass("input-success");
        } else{
            $("#radio-redes-enrutamiento").addClass("input-success");
            $("#radio-redes-enrutamiento").removeClass("input-error");
        }

        if(redesTecnologiasWANValue == "" || redesTecnologiasWANValue == null || redesTecnologiasWANValue == undefined ){
            isValid = false;
            $("#radio-redes-tecnologiasWan").addClass("input-error");
            $("#radio-redes-tecnologiasWan").removeClass("input-success");
        } else{
            $("#radio-redes-tecnologiasWan").addClass("input-success");
            $("#radio-redes-tecnologiasWan").removeClass("input-error");
        }

        if(redesAdministracionValue == "" || redesAdministracionValue == null || redesAdministracionValue == undefined ){
            isValid = false;
            $("#radio-redes-administracion").addClass("input-error");
            $("#radio-redes-administracion").removeClass("input-success");
        } else{
            $("#radio-redes-administracion").addClass("input-success");
            $("#radio-redes-administracion").removeClass("input-error");
        }

        if(redesEticaValue == "" || redesEticaValue == null || redesEticaValue == undefined ){
            isValid = false;
            $("#radio-redes-etica").addClass("input-error");
            $("#radio-redes-etica").removeClass("input-success");
        } else{
            $("#radio-redes-etica").addClass("input-success");
            $("#radio-redes-etica").removeClass("input-error");
        }

        return isValid;
    }

    function SaveSelection(){

        if(valueCarrera == "Software") {

            arraySelection = [{
                materia: "Fundamentos de Programación",
                value: softwareFundamentosValue
            },
            {
                materia: "Programación Web", 
                value: softwareProgramacionValue
            },
            {
                materia: "Bases de Datos Avanzado",
                value: softwareDataBaseValue
            },
            {
                materia: "Diseño Centrado en el Usuario",
                value: softwareDiseñoValue
            }, 
            {
                materia: "Mineria de Datos",
                value: softwareMineriaValue
            }, 
            {
                materia: "Etica II",
                value: SoftwareEticaValue
            }];

        } else if(valueCarrera == "Multimedia"){

            arraySelection = [{
                materia: "Animación 2D",
                value: multimediaAnimacionValue
            },
            {
                materia: "3D Modelado y Renderizado", 
                value: multimediaModeladoValue
            },
            {
                materia: "Producción Audiovisual",
                value: multimediaProduccionValue
            },
            {
                materia: "Desktop Publishing Avanzado",
                value: multimediaDesktopValue
            }, 
            {
                materia: "3D Luces y Texturas",
                value: multimedia3DValue
            }, 
            {
                materia: "Etica II",
                value: multimediaEticaValue
            }];

        } else {

            arraySelection = [{
                materia: "Sistemas Operativos III",
                value: redesSistemasValue
            },
            {
                materia: "Redes Inalámbricas", 
                value: resdesRedesInalambricasValue
            },
            {
                materia: "Enrutamiento Avanzado",
                value: redesEnrutamientoValue
            },
            {
                materia: "Tecnologías WAN",
                value: redesTecnologiasWANValue
            }, 
            {
                materia: "Administración I",
                value: redesAdministracionValue
            }, 
            {
                materia: "Etica II",
                value: redesEticaValue
            }];

        }

    }

    function Accept(){

        if(valueCarrera == "Software"){
            if(SoftwareValidateSelection()){
                toastr.success("Su selección ha sido procesada satisfactoriamente ", "Notification", {setTimeout:1});
                Confirmation();
            } else {
                toastr.error("Debe seleccionar todas las asignaturas", "Oops, ha ocurrido un error", {setTimeout:1});
            }
        } else if(valueCarrera == "Multimedia"){
            if(MultimediaValidateSelection()){
                toastr.success("Su selección ha sido procesada satisfactoriamente ", "Notification", {setTimeout:1});
                Confirmation();
            } else {
                toastr.error("Debe seleccionar todas las asignaturas", "Oops, ha ocurrido un error", {setTimeout:1});
            }
        } else {
            if(RedesValidateSelection()){
                toastr.success("Su selección ha sido procesada satisfactoriamente ", "Notification", {setTimeout:1});
                Confirmation();
            } else{
                toastr.error("Debe seleccionar todas las asignaturas", "Oops, ha ocurrido un error", {setTimeout:1});
            }
        }
        
    }

    function SelectionNavegation(){

        if(valueCarrera == "Software"){
            SelectionSoftware();
    
         } else if(valueCarrera == "Multimedia"){
            SelectionMultimedia();
    
        } else {
            SelectionRedes();
    
        }
    
    }

    function Clear(){
        $("#name").val("").removeClass("input-error").removeClass("input-success").focus();
        $("#provincia").val("").removeClass("input-error").removeClass("input-success");
        $("#ciudad").val("").removeClass("input-error").removeClass("input-success");
        $("#sector").val("").removeClass("input-error").removeClass("input-success");
        $("#calle").val("").removeClass("input-error").removeClass("input-success");
        $("#carrera").val("").removeClass("input-error").removeClass("input-success");
    }

    //HTML del index
    function GeneratePersonalDataForm(){
        const htmlPersonalData = `
        <div class="row mx-auto" id="container-row">
        <div class="col-7 offset-3">
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a id="page-1" class="nav-link active">Datos personales</a></li>
                </ul>
            </div>
            <div class="card mb-5">
                <div class="card-header bg-success text-light">
                    <h4 class="text-center">Datos Personales</h4>
                </div>
                <div class="card-body">
                    <div class="card-title">
                        <h4 class="text-center mb-4">Rellene todos los campos a continuación</h4>
                    </div>
                
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" id="name" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="provincia" class="form-label">Provincia</label>
                        <input id="provincia" type="text" class="form-control">
                    </div>

                    
                    <div class="mb-3">
                        <label for="ciudad" class="form-label">Ciudad</label>
                        <input id="ciudad" type="text" class="form-control">
                    </div>

                    
                    <div class="mb-3">
                        <label for="sector" class="form-label">Sector</label>
                        <input id="sector" type="text" class="form-control">
                    </div>

                    
                    <div class="mb-3">
                        <label for="calle" class="form-label">Calle</label>
                        <input id="calle" type="text" class="form-control">
                    </div>

                    <div class="mb-5">
                        <label for="carrera" class="form-label">Carrera</label>
                        <select type="radio" id="carrera" class="form-select">
                            <option value="" selected>Seleccione una opción</option>
                            <option value="Software">Software</option>
                            <option value="Multimedia">Multimedia</option>
                            <option value="Redes">Redes</option>
                        </select>
                    </div>

                    <div>
                        <button id="btn-save" type="button" class="btn btn-success float-end" >Registrar</button>
                        <button id="btn-clear" type="button" class="btn btn-warning float-end me-2">Limpiar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;

        $("#container-main").html(htmlPersonalData);
        $("#name").val(valueName);
        $("#provincia").val(valueProvincia);
        $("#ciudad").val(valueCiudad);
        $("#sector").val(valueSector);
        $("#calle").val(valueCalle);
        $("#carrera").val(valueCarrera);


    }

    // Selection from Software
    function SelectionSoftware(){
        const htmlSelectionSoftware =`
        <div class="row mx-auto">
        <div class="col-9 offset-3">
            <div>
                <ul class="nav nav-tabs w-75">
                    <li class="nav-item"><a id="page-1"  class="nav-link">Datos personales</a></li>
                    <li class="nav-item"><a id="page-2" class="nav-link active">Selección de asignaturas</a></li>
                </ul>
            </div>
            <div class="card mb-5 w-75">
                <div class="card-header bg-success text-light mb-3">
                    <h4 class="text-center">Selección de asignaturas</h4>
                </div>
                <div class="card-body"> <h5 class="mt-3">Fundamentos de Programación</h5>

                        <div class="mb-5" id="radio-software-fundamentos">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos3" value="Mi 12:00-14:00">Mi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="fundamentos" id="fundamentos4" value="Ju 14:00-16:00">Ju 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Programación Web</h5>
                        <div class="mb-5" id="radio-software-programacion">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="ProgramacionWeb" id="ProgramacionWeb1" value="Mi 08:00-10:00">Mi 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="ProgramacionWeb" id="ProgramacionWeb2" value="Ju 10:00-12:00">Ju 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="ProgramacionWeb" id="ProgramacionWeb3" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="ProgramacionWeb" id="ProgramacionWeb4" value="Vi 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Bases de Datos Avanzado</h5>
                        <div class="mb-5" id="radio-software-dataBase">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="dataBase" id="dataBase1" value="Ma 08:00-10:00">Ma 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="dataBase" id="dataBase2" value="Mi 10:00-12:00">Mi 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="dataBase" id="dataBase3" value="Ju 12:00-14:00">Ju 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="dataBase" id="dataBase4" value="Vi 14:00-16:00">Vi 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Diseño Centrado en el Usuario</h5>
                        <div class="mb-5" id="radio-software-diseño">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="diseño" id="diseño1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="diseño" id="diseño2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="diseño" id="diseño3" value="Mi 12:00-14:00">Mi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="diseño" id="diseño4" value="Ju 14:00-16:00">Ju 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Mineria de Datos</h5>
                        <div class="mb-5" id="radio-software-mineria">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="mineria" id="mineria1" value="Ma 08:00-10:00">Ma 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="mineria" id="mineria2" value="Mi 10:00-12:00">Mi 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="mineria" id="mineria3" value="Ju 12:00-14:00">Ju 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="mineria" id="mineria4" value="Vi 14:00-16:00">Vi 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Etica II</h5>
                        <div class="mb-4" id="radio-software-etica">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="etica" id="etica1" value="Mi 08:00-10:00">Mi 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica2" value="Ju 10:00-12:00">Ju 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica3" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica4" value="Sa 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>
                        <div>
                            <button id="btn-accept" class="btn btn-success float-end">Aceptar</button>
                        </div>
                </div>
            </div>
        </div>
        </div>

        `;

        $("#container-main").html(htmlSelectionSoftware);

        $(`#radio-software-fundamentos input[type='radio'][value=${softwareFundamentosValue}]`).prop("checked", true);
        $(`#radio-software-programacion input[type='radio'][value=${softwareProgramacionValue}]`).prop("checked", true);
        $(`#radio-software-dataBase input[type='radio'][value=${softwareDataBaseValue}]`).prop(
            "checked",
            true
          );
    }

    // Selection from Multimedia
    function SelectionMultimedia(){
        const htmlSelectionMultimedia =`
        <div class="row mx-auto">
        <div class="col-9 offset-3">
            <div>
                <ul class="nav nav-tabs w-75">
                    <li class="nav-item"><a id="page-1"  class="nav-link">Datos personales</a></li>
                    <li class="nav-item"><a id="page-2" class="nav-link active">Selección de asignaturas</a></li>
                </ul>
            </div>
            <div class="card mb-5 w-75">
                <div class="card-header bg-success text-light mb-3">
                    <h4 class="text-center">Selección de asignaturas</h4>
                </div>
                <div class="card-body">
                <h5 class="mt-3">Animación 2D</h5>
                        <div class="mb-5" id="radio-multimedia-animacion">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="animacion" id="animacion1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="animacion" id="animacion2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="animacion" id="animacion3" value="Mi 12:00-14:00">Mi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="animacion" id="animacion4" value="Ju 14:00-16:00">Ju 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">3D Modelado y Renderizado</h5>
                        <div class="mb-5" id="radio-multimedia-modelado">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="modelado" id="modelado1" value="Ma 08:00-10:00">Ma 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="modelado" id="modelado2" value="Mi 10:00-12:00">Mi 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="modelado" id="modelado3" value="Ju 12:00-14:00">Ju 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="modelado" id="modelado4" value="Vi 14:00-16:00">Vi 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Producción Audiovisual</h5>
                        <div class="mb-5" id="radio-multimedia-produccion">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="produccion" id="produccion1" value="Mi 08:00-10:00">Mi 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="produccion" id="produccion2" value="Ju 10:00-12:00">Ju 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="produccion" id="produccion3" value="Vi 14:00-16:00">Vi 14:00-16:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="produccion" id="produccion4" value="Sa 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Desktop Publishing Avanzado</h5>
                        <div class="mb-5" id="radio-multimedia-desktop">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="desktop" id="desktop1" value="Sa 08:00-10:00">Sa 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="desktop" id="desktop2" value="Lu 10:00-12:00">Lu 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="desktop" id="desktop3" value="Ma 12:00-14:00">Ma 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="desktop" id="desktop4" value="Ju 14:00-16:00">Ju 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">3D Luces y Texturas</h5>
                        <div class="mb-5" id="radio-multimedia-3D">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="3D" id="3D1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="3D" id="3D2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="3D" id="3D3" value="Mi 12:00-14:00">Mi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="3D" id="3D4" value="Ju 14:00-16:00">Ju 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Etica II</h5>
                        <div class="mb-4" id="radio-multimedia-etica">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="etica" id="etica1" value="Mi 08:00-10:00">Mi 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica2" value="Ju 10:00-12:00">Ju 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica3" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica4" value="Sa 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <div>
                            <button id="btn-accept" class="btn btn-success float-end">Aceptar</button>
                        </div>

                </div>

            </div>
        </div>
        </div>

        `;

        $("#container-main").html(htmlSelectionMultimedia);

    }

    // Selection from redes
    function SelectionRedes(){
        const htmlSelectionRedes =`
        <div class="row mx-auto">
        <div class="col-9 offset-3">
            <div>
                <ul class="nav nav-tabs w-75">
                    <li class="nav-item"><a id="page-1"  class="nav-link">Datos personales</a></li>
                    <li class="nav-item"><a id="page-2" class="nav-link active">Selección de asignaturas</a></li>
                </ul>
            </div>
            <div class="card mb-5 w-75">
                <div class="card-header bg-success text-light mb-3">
                    <h4 class="text-center">Selección de asignaturas</h4>
                </div>
                <div class="card-body">

                        <h5 class="mt-3">Sistemas Operativos III</h5>                        

                        <div class="mb-5" id="radio-redes-sistema">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="sistema" id="sistema1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="sistema" id="sistema2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="sistema" id="sistema3" value="Mi 12:00-14:00">Mi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="sistema" id="sistema4" value="Ju 14:00-16:00">Ju 14:00-16:00
                                </label>
                            </div>
                        </div>


                        <h5 class="mt-3">Redes Inalámbricas</h5>
                        <div class="mb-5" id="radio-redes-redesInalambricas">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="redesInalambricas" id="redesInalambricas1" value="Ma 08:00-10:00">Ma 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="redesInalambricas" id="redesInalambricas2" value="Mi 10:00-12:00">Mi 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="redesInalambricas" id="redesInalambricas3" value="Ju 12:00-14:00">Ju 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="redesInalambricas" id="redesInalambricas4" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Enrutamiento Avanzado</h5>
                        <div class="mb-5" id="radio-redes-enrutamiento">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="enrutamiento" id="enrutamiento1" value="Mi 08:00-10:00">Mi 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="enrutamiento" id="enrutamiento2" value="Ju 10:00-12:00">Ju 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="enrutamiento" id="enrutamiento3" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="enrutamiento" id="enrutamiento4" value="Sa 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Tecnologías WAN</h5>
                        <div class="mb-5" id="radio-redes-tecnologiasWan">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="tecnologiasWan" id="tecnologiasWan1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="tecnologiasWan" id="tecnologiasWan2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="tecnologiasWan" id="tecnologiasWan3" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="tecnologiasWan" id="tecnologiasWan4" value="Sa 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Administración I</h5>
                        <div class="mb-5" id="radio-redes-administracion">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="administracion" id="administracion1" value="Ma 08:00-10:00">Ma 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="administracion" id="administracion2" value="Mi 10:00-12:00">Mi 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="administracion" id="administracion3" value="Vi 12:00-14:00">Vi 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="administracion" id="administracion4" value="Sa 14:00-16:00">Sa 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <h5 class="mt-3">Etica II</h5>
                        <div class="mb-4" id="radio-redes-etica">
                            
                            <div class="d-inline-block">
                                <label class="radio-inline">
                                    <input class="form-check-input" type="radio" name="etica" id="etica1" value="Lu 08:00-10:00">Lu 08:00-10:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica2" value="Ma 10:00-12:00">Ma 10:00-12:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica3" value="Ju 12:00-14:00">Ju 12:00-14:00
                                </label>
                            </div>

                            <div class="d-inline-block">
                                <label class="radio-inline ms-3 form-check-label">
                                    <input class="form-check-input" type="radio" name="etica" id="etica4" value="Vi 14:00-16:00">Vi 14:00-16:00
                                </label>
                            </div>
                        </div>

                        <div>
                            <button id="btn-accept" class="btn btn-success float-end">Aceptar</button>
                        </div>

                </div>

            </div>
        </div>
        </div>

        `;

        $("#container-main").html(htmlSelectionRedes);
    }

    // Confirmation generate
    function Confirmation(){

        SaveSelection();

        const htmlConfirmation = `
        <div class="row">
        <div class="col-8 offset-3">
            <div>
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a id="page-1"  class="nav-link">Datos personales</a></li>
                    <li  class="nav-item"><a id="page-2" class="nav-link">Selección de asignaturas</a></li>
                    <li  class="nav-item"><a id="page-3" class="nav-link active">Confirmación</a></li>
                </ul>
            </div>
            <div class="card mb-5 w-10 mx-auto">
                <div class="card-header bg-success text-light">
                    <h4 class="text-center">Confirmación</h4>
                </div>
                <div class="card-body">
                    <div class="card mb-4">
                        <div class="card-header">
                          Datos Personales
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">Nombre: ${valueName}</li>
                          <li class="list-group-item">Provincia: ${valueProvincia}</li>
                          <li class="list-group-item">Ciudad: ${valueCiudad}</li>
                          <li class="list-group-item">Sector: ${valueSector}</li>
                          <li class="list-group-item">Calle: ${valueCalle}</li>
                          <li class="list-group-item">Carrera: ${valueCarrera}</li>
                        </ul>
                    </div>
                        <table class="table table-dark table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">Asignaturas</th>
                                    <th scope="col">Lu</th>
                                    <th scope="col">Ma</th>
                                    <th scope="col">Mi</th>
                                    <th scope="col">Ju</th>
                                    <th scope="col">Vi</th>
                                    <th scope="col">Sa</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider" id="table-body">


                            </tbody>
                        </table>
                    <div>
                    </div>
                    <button id="btn-finalize" type="button" class="mt-2 btn btn-success float-end">Finalizar</button>
                </div>
            </div>
        </div>
    </div>
        
        `;

        $("#container-main").html(htmlConfirmation);


        arraySelection.forEach((arraySelection) => {
            const  selectionName = arraySelection.materia;
            const selectionDay = arraySelection.value.substring(0,2);
            const selectionValue = arraySelection.value;

            if(selectionDay == "Lu"){
                $("#table-body").append(`
                <tr>
                    <th scope="row">${selectionName}</th>
                    <td>${selectionValue}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                `);

            } else if(selectionDay == "Ma") {
                $("#table-body").append(`
                <tr>
                    <th scope="row">${selectionName}</th>
                    <td></td>
                    <td>${selectionValue}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `);
            } else if(selectionDay == "Mi") {
                $("#table-body").append(`
                <tr>
                    <th scope="row">${selectionName}</th>
                    <td></td>
                    <td></td>
                    <td>${selectionValue}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            `);
            } else if(selectionDay == "Ju") {
                $("#table-body").append(`
                <tr>
                    <th scope="row">${selectionName}</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${selectionValue}</td>
                    <td></td>
                    <td></td>
                </tr>
            `);
            } else if(selectionDay == "Vi") {
                $("#table-body").append(`
                <tr>
                    <th scope="row">${selectionName}</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${selectionValue}</td>
                    <td></td>
                </tr>
            `);
            } else if(selectionDay == "Sa") {
                $("#table-body").append(`
                <tr>
                    <th scope="row">${selectionName}</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>${selectionValue}</td>
                </tr>
            `);
            }
        });

            
    }

})