import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const InfoS = () => {
  return (
    <Form>
     
     <Row className="mt-5 mb-5">
        <Col sm={6}>
        
        <div className="p-float-label">
            <Form.Label htmlFor="milieuResidence">Milieu de résidence</Form.Label>
            <Form.Control as="select" name="milieuResidence" id="milieuResidence">
              {/* Add options dynamically according to your data */}
              <option value="">Select Milieu</option>
              <option value="milieu1">Urbain</option>
              <option value="milieu2">Rural</option>
              {/* Add more options */}
            </Form.Control>
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="situationMatrimonial">Situation matrimoniale</Form.Label>
            <Form.Control as="select" name="situationMatrimonial" id="situationMatrimonial">
              {/* Add options dynamically according to your data */}
              <option value="">Select Situation</option>
              <option value="situation1">Veuf/veuve </option>
              <option value="situation2">Mariée </option>
              <option value="situation3">Divorcé </option>
              <option value="situation4">orphelin </option>
              <option value="situation5"> Mère célibataire </option>
            </Form.Control>
          </div>
        
          <div className="p-float-label">
            <Form.Label htmlFor="dureeMariage">Durée du mariage</Form.Label>
            <Form.Control type="number" name="dureeMariage" id="dureeMariage" />
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="nombreEnfant">Nombre d'enfant</Form.Label>
            <Form.Control type="number" name="nombreEnfant" id="nombreEnfant" />
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="femmeEnceinte">La femme est-elle enceinte ?</Form.Label>
            <Form.Control as="select" name="femmeEnceinte" id="femmeEnceinte">
              {/* Add options dynamically according to your data */}
              <option value="femmeEnceinte">Oui </option>
              <option value="femmeEnceinte1">Non </option>
            </Form.Control>
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="niveauScolaire">Niveau scolaire</Form.Label>
            <Form.Control as="select" name="niveauScolaire" id="niveauScolaire">
              <option value="femmeEnceinte">Préscolaire </option>
              <option value="femmeEnceinte">primaire </option>
              <option value="femmeEnceinte">Collège </option>
              <option value="femmeEnceinte">Lycée </option>
              <option value="femmeEnceinte">Enseignement Traditionnel </option>
              <option value="femmeEnceinte">Enseignement Non Conventionnelle </option>
              <option value="femmeEnceinte">Formation Professionnel </option>
              <option value="femmeEnceinte">Non Scolariser </option>
              <option value="femmeEnceinte">Non Définis </option>
              
            </Form.Control>
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="profession">Profession</Form.Label>
            <Form.Control as="select" name="profession" id="profession">
            <option value="profession"> Profession Traditionnel </option>
              <option value="profession">Travailleur a Domicile  </option>
              <option value="profession">Employeur dans usine ou espace de commerce</option>
              <option value="profession">Vendeur Ambulant </option>
              <option value="profession"> Mendiant </option>
              <option value="profession"> élève </option>
              <option value="profession"> Autre </option>
              <option value="profession"> Sans </option>
              <option value="profession"> Non Définis </option>
            </Form.Control>
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="handicap">Présence d'un handicap</Form.Label>
            <Form.Control as="select" name="handicap" id="handicap">
              <option value="handicap"> Mental </option>
              <option value="handicap"> Sensoriel </option>
              <option value="handicap"> Moteur </option>
              <option value="handicap"> Sans Handicap </option>
             
            </Form.Control>
          </div>

          <div className="p-float-label">
            <Form.Label htmlFor="addiction">Présence d'une addiction</Form.Label>
            <Form.Control as="select" name="addiction" id="addiction">
            <option value="addiction">Drogues</option>
            <option value="addiction">Alcoolique</option>
            <option value="addiction">Non Toxicomane</option>
            <option value="addiction">Non Définis </option>
            </Form.Control>
          </div>



          
        </Col>
        <Col sm={6}>
    
          <div className="p-float-label inputAr">
            <Form.Label htmlFor="milieuResidenceArabic" className="floatLabelAr">وسط الإقامة</Form.Label>
            <Form.Control as="select" name="milieuResidence" id="milieuResidenceArabic">
              {/* Add options dynamically according to your data */}
              <option value="">اختر وسط الإقامة</option>
              <option value="milieu1AR">حضري</option>
              <option value="milieu2AR">قروي</option>
              {/* Add more options */}
            </Form.Control>
          </div>
      

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="situationMatrimonialArabic" className="floatLabelAr">الحالة العائلية</Form.Label>
            <Form.Control as="select" name="situationMatrimonial" id="situationMatrimonialArabic">
              {/* Add options dynamically according to your data */}
              <option value="">اختر الحالة العائلية</option>
              <option value="situation1AR">عازب/عازبة</option>
              <option value="situation2AR">متزوج / متزوج</option>
              <option value="situation2AR">أم عازبة</option>
              <option value="situation2AR">مطلق / مطلقة</option>
              <option value="situation2AR">أرمل / أرملة</option>
              <option value="situation2AR">غير معروف</option>
  
            </Form.Control>
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="dureeMariageArabic" className="floatLabelAr">مدة الزواج</Form.Label>
            <Form.Control type="number" name="dureeMariage" id="dureeMariageArabic" />
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="nombreEnfantArabic" className="floatLabelAr">عدد الابناء</Form.Label>
            <Form.Control type="number" name="nombreEnfant" id="nombreEnfantArabic" />
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="femmeEnceinteArabic" className="floatLabelAr">وجود حمل</Form.Label>
            <Form.Control as="select" name="femmeEnceinte" id="femmeEnceinteArabic">
            <option value="femmeEnceinteArabic">نعم</option>
              <option value="femmeEnceinteArabic">لا </option>
            </Form.Control>
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="niveauScolaireArabic" className="floatLabelAr">المستوى الدراسي</Form.Label>
            <Form.Control as="select" name="niveauScolaire" id="niveauScolaireArabic">
            <option value="niveauScolaireArabic">تعليم أولي </option>
            <option value="niveauScolaireArabic">تعليم اصيل </option>
            <option value="niveauScolaireArabic">ابتدائي </option>
            <option value="niveauScolaireArabic">الثانوي الإعدادي </option>
            <option value="niveauScolaireArabic">الثانوي الإعدادي </option>
            <option value="niveauScolaireArabic">تعليم الغير نظامي </option>
            <option value="niveauScolaireArabic">التكوين المهني </option>
            <option value="niveauScolaireArabic">بدون </option>
            <option value="niveauScolaireArabic">غير معروف </option>

            </Form.Control>
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="professionArabic" className="floatLabelAr">النشاط المهني</Form.Label>
            <Form.Control as="select" name="profession" id="professionArabic">
            <option value="professionArabic">حرفي</option>
            <option value="professionArabic">عامل منزلي</option>
            <option value="professionArabic">مستخدم بمعمل او محل تجاري</option>
            <option value="professionArabic">بائع متجول</option>
            <option value="professionArabic">متسول</option>
            <option value="professionArabic">يتمدرس</option>
            <option value="professionArabic">شغل اخر</option>
            <option value="professionArabic">بدون</option>
            <option value="professionArabic">غير معروف</option>
          

          
            </Form.Control>
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="handicapArabic" className="floatLabelAr">الإعاقة</Form.Label>
            <Form.Control as="select" name="handicap" id="handicapArabic">
            <option value="handicapArabic">إعاقة ذهنية</option>
            <option value="handicapArabic">إعاقة حسية</option>
            <option value="handicapArabic">إعاقة حركية</option>
            <option value="handicapArabic">بدون إعاقة</option>
          
          
            </Form.Control>
          </div>

          <div className="p-float-label inputAr">
            <Form.Label htmlFor="addictionArabic" className="floatLabelAr">الإدمان</Form.Label>
            <Form.Control as="select" name="addiction" id="addictionArabic">
            <option value="addictionArabic"> المخدرات</option>
            <option value="addictionArabic"> الكحول</option>
            <option value="addictionArabic"> غير مدمن</option>
            <option value="addictionArabic"> غير معروف</option>
           
           
    
           
            </Form.Control>
          </div>


          

        </Col>
    
      </Row>
    </Form>
  );
};


export default InfoS;



