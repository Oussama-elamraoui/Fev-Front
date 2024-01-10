import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const InfoP = () => {
  return (
    <Form>
      <Row className="mt-5 mb-5">
        <Col sm={6}>
          <div className="form-group">
            <label htmlFor="dateSignalement">Date du signalement</label>
            <input
              type="date"
              className="form-control"
              id="dateSignalement"
              name="dateSignalement"
            />
            <div >
            <Form.Label htmlFor="nom">Nom</Form.Label>
            <Form.Control type="text" name="nom" id="nom" />
          </div>
          <div className="d-flex flex-column">
            <Form.Label htmlFor="prenom">Prénom</Form.Label>
            <Form.Control type="text" name="prenom" id="prenom" />
          </div>
          <div className="d-flex flex-column">
            <Form.Label htmlFor="cin">CIN</Form.Label>
            <Form.Control type="text" name="cin" id="cin" />
          </div>
          <div className="d-flex flex-column">
            <Form.Label htmlFor="adresse">Adresse</Form.Label>
            <Form.Control type="text" name="adresse" id="adresse" />
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="dateNaissance">Date de naissance</Form.Label>
            {/* Replace the <p-calendar> with an appropriate Date picker component */}
            <Form.Control type="date" name="dateNaissance" id="dateNaissance" />
          </div>
          <div className="d-flex flex-column">
            <Form.Label htmlFor="lieuNaissance">Lieu de naissance</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="lieuNaissance" id="lieuNaissance">
              {/* Add options dynamically according to your data */}
              <option value="">Select Lieu de naissance</option>
              <option value="city1">Rabat</option>
              <option value="city2">Salé</option>
              <option value="city3">Kenitra</option>
              <option value="city4">Sidi Bouknadel</option>
              {/* Add more options */}
            </Form.Control>
          </div>
          <div className="d-flex flex-column">
            <Form.Label htmlFor="nationalite">Nationalité</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="nationalite" id="nationalite">
              {/* Add options dynamically according to your data */}
              <option value="">Select Nationalité</option>
              <option value="country1">marocaine</option>
              <option value="country2">étranger </option>
              {/* Add more options */}
            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="dejaDeclare">Avez-vous déjà signalé des actes de violence ?</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="dejaDeclare" id="dejaDeclare">
              {/* Add options dynamically according to your data */}
              <option value="">Select</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
              {/* Add more options */}
            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="lieuDeclaration">Où avez-vous signalé cela ?</Form.Label>
            <Form.Control as="select" name="lieuDeclaration" id="lieuDeclaration">
              <option value="">Select Lieu</option>
              <option value="city1">Rabat</option>
              <option value="city2">Salé</option>
              <option value="city3">Kenitra</option>
              <option value="city4">Sidi Bouknadel</option>
            </Form.Control>
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="agresseurs">Nombre d'agresseurs</Form.Label>
            <Form.Control
              type="text"
              name="nombreAgresseur"
              id="agresseurs"
              placeholder="Nombre d'agresseurs"
              // Add onChange event handler to call generateAgresseurs() function
              // onChange={() => generateAgresseurs()}
            />
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="raisonVisite">Raison de la visite</Form.Label>
            {/* Replace the p-multiSelect with an appropriate multi-select component */}
            <Form.Control as="select" name="raisonVisite" id="raisonVisite">
              {/* Add options dynamically according to your data */}
              <option value="">Select Raison</option>
              <option value="reason1"> Assistance Sociale</option>
              <option value="reason2">Certificat Médicale</option>
              <option value="reason3">PEC Psychologique </option>
              <option value="reason4">PEC Médicale</option>
              <option value="reason5">renseignement</option>
              <option value="reason6">Autre</option>
            </Form.Control>
          </div>
        
         
        


          </div>
        </Col>
        <Col sm={6}>
          <div className="form-group">
            <label htmlFor="dateSignalementArabic">تاريخ التصريح</label>
            <input
              type="date"
              className="form-control"
              id="dateSignalementArabic"
              name="dateSignalementArabic"
            />

            <div >
            <Form.Label htmlFor="nomAr">الإسم العائلي</Form.Label>
            <Form.Control type="text" name="nom" id="nomAr" />
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="prenomAr">الإسم الشخصي</Form.Label>
            <Form.Control type="text" name="prenom" id="prenomAr" />
          </div>
          
          <div className="d-flex flex-column">
            <Form.Label htmlFor="cinAr">البطاقة الوطنية للتعريف</Form.Label>
            <Form.Control type="text" name="cin" id="cinAr" />
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="adresseAr">العنوان</Form.Label>
            <Form.Control type="text" name="adresse" id="adresseAr" />
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="dateNaissanceArabic">تاريخ الإزدياد</Form.Label>
            {/* Replace the <p-calendar> with an appropriate Date picker component */}
            <Form.Control type="date" name="dateNaissance" id="dateNaissanceArabic" />
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="lieuNaissanceArabic">مكان الإزدياد</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="lieuNaissance" id="lieuNaissanceArabic">
              {/* Add options dynamically according to your data */}
              <option value="">اختر مكان الإزدياد</option>
              <option value="cityAR1">الرباط</option>
              <option value="cityAR2">سلا</option>
              <option value="cityAR2">القنيطرة</option>
              <option value="cityAR2">سيدي بوقنادل</option>
            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="nationaliteArabic">الجنسية</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="nationalite" id="nationaliteArabic">
              {/* Add options dynamically according to your data */}
              <option value="">اختر الجنسية</option>
              <option value="countryAR1">مغربية</option>
              <option value="countryAR2">اجنبي</option>

            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="dejaDeclareArabic">هل سبق التبليغ عن العنف ؟</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="dejaDeclare" id="dejaDeclareArabic">
              {/* Add options dynamically according to your data */}
              <option value="">اختر</option>
              <option value="yes">نعم</option>
              <option value="no">لا</option>
              {/* Add more options */}
            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="lieuDeclarationArabic">اين تم التبليغ ؟</Form.Label>
            {/* Replace the <p-dropdown> with an appropriate dropdown component */}
            <Form.Control as="select" name="lieuDeclaration" id="lieuDeclarationArabic">
            <option value="">اختر مكان الإزدياد</option>
              <option value="cityAR1">الرباط</option>
              <option value="cityAR2">سلا</option>
              <option value="cityAR2">القنيطرة</option>
              <option value="cityAR2">سيدي بوقنادل</option>
            </Form.Control>
          </div>
           
          <div className="p-float-label inputAr">
            <Form.Label htmlFor="agresseursArabic" className="floatLabelAr">عدد المعتدين</Form.Label>
            <Form.Control
              type="text"
              name="nombreAgresseur"
              id="agresseursArabic"
              placeholder="عدد المعتدين"
              // Add onChange event handler to call generateAgresseurs() function
              // onChange={() => generateAgresseurs()}
            />
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="raisonVisiteArabic" className="floatLabelAr">أسباب الزيارة</Form.Label>
            {/* Replace the p-multiSelect with an appropriate multi-select component */}
            <Form.Control as="select" name="raisonVisite" id="raisonVisiteArabic">
              {/* Add options dynamically according to your data */}
              <option value="">اختر السبب</option>
              <option value="reason1AR">طلب المساعدة اجتماعية </option>
              <option value="reason2AR">طلب شهادة طبية </option>
              <option value="reason2AR">تكفل نفسي </option>
              <option value="reason2AR">تكفل طبي </option>
              <option value="reason2AR">طلب المعلومات  </option>
              <option value="reason2AR">آخر </option>
              
              
              {/* Add more options */}
            </Form.Control>
          </div>

          

      

          </div>
        </Col>
      </Row>

      
      
    </Form>
  );
};


export default InfoP;



