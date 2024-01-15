import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const InfoS = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label htmlFor="milieuResidence">Milieu de résidence</Form.Label>
          <Form.Control as="select" name="milieuResidence" id="milieuResidence" style={{width:'100%'}}>
            {/* Add options dynamically according to your data */}
            <option value="">Select Milieu</option>
            <option value="Urbain">Urbain</option>
            <option value="Rural">Rural</option>
            {/* Add more options */}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="milieuResidenceArabic" className='d-flex justify-content-end'>وسط الإقامة</Form.Label>
          <Form.Control as="select" name="milieuResidence" id="milieuResidenceArabic" dir='rtl' style={{width:'100%'}} className='d-flex justify-content-end'>
            {/* Add options dynamically according to your data */}
            <option value="">اختر وسط الإقامة</option>
            <option value="حضري">حضري</option>
            <option value="قروي">قروي</option>
            {/* Add more options */}
          </Form.Control>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label htmlFor="situationMatrimonial" >Situation matrimoniale</Form.Label>
          <Form.Control as="select" name="situationMatrimonial" id="situationMatrimonial" style={{width:'100%'}}>
            {/* Add options dynamically according to your data */}
            <option value="">Select Situation</option>
            <option value="situation1">Veuf/veuve </option>
            <option value="situation2">Mariée </option>
            <option value="situation3">Divorcé </option>
            <option value="situation4">orphelin </option>
            <option value="situation5"> Mère célibataire </option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="situationMatrimonialArabic"  className='d-flex justify-content-end'>الحالة العائلية</Form.Label>
          <Form.Control as="select" name="situationMatrimonial" id="situationMatrimonialArabic" dir='rtl' style={{width:'100%'}} className='d-flex justify-content-end'>
            {/* Add options dynamically according to your data */}
            <option value="">اختر الحالة العائلية</option>
            <option value="situation1AR">عازب/عازبة</option>
            <option value="situation2AR">متزوج / متزوج</option>
            <option value="situation2AR">أم عازبة</option>
            <option value="situation2AR">مطلق / مطلقة</option>
            <option value="situation2AR">أرمل / أرملة</option>
            <option value="situation2AR">غير معروف</option>
          </Form.Control>
        </Col>
      </Row>

      <Row>
        <Col> <Form.Label htmlFor="dureeMariage">Durée du mariage</Form.Label>
          <Form.Control type="number" name="dureeMariage" id="dureeMariage" style={{width:'100%'}}/></Col>
        <Col>
          <Form.Label htmlFor="dureeMariageArabic" className='d-flex justify-content-end'>مدة الزواج</Form.Label>
          <Form.Control type="number" name="dureeMariage" id="dureeMariageArabic" dir='rtl' style={{width:'100%'}}/>
        </Col>
      </Row>

      <Row>
        <Col> <Form.Label htmlFor="nombreEnfant">Nombre d'enfant</Form.Label>
          <Form.Control type="number" name="nombreEnfant" id="nombreEnfant" style={{width:'100%'}}/></Col>
        <Col>
          <Form.Label htmlFor="nombreEnfantArabic" className='d-flex justify-content-end'>عدد الابناء</Form.Label>
          <Form.Control type="number" name="nombreEnfant" id="nombreEnfantArabic"  dir='rtl' style={{width:'100%'}}/>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label htmlFor="femmeEnceinte">La femme est-elle enceinte ?</Form.Label>
          <Form.Control as="select" name="femmeEnceinte" id="femmeEnceinte" style={{width:'100%'}}>
            {/* Add options dynamically according to your data */}
            <option value="femmeEnceinte">Oui </option>
            <option value="femmeEnceinte1">Non </option>
          </Form.Control></Col>
        <Col>
          <Form.Label htmlFor="femmeEnceinteArabic" className='d-flex justify-content-end'>وجود حمل</Form.Label>
          <Form.Control as="select" name="femmeEnceinte" id="femmeEnceinteArabic" dir='rtl' style={{width:'100%'}}>
            <option value="femmeEnceinteArabic">نعم</option>
            <option value="femmeEnceinteArabic">لا </option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="niveauScolaire">Niveau scolaire</Form.Label>
          <Form.Control as="select" name="niveauScolaire" id="niveauScolaire" style={{width:'100%'}}>
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
        </Col>
        <Col>
          <Form.Label htmlFor="niveauScolaireArabic" className='d-flex justify-content-end'>المستوى الدراسي</Form.Label>
          <Form.Control as="select" name="niveauScolaire" id="niveauScolaireArabic" dir='rtl' style={{width:'100%'}}>
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
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Label htmlFor="profession">Profession</Form.Label>
          <Form.Control as="select" name="profession" id="profession" style={{width:'100%'}}>
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
        </Col>
        <Col>
          <Form.Label htmlFor="professionArabic" className='d-flex justify-content-end'>النشاط المهني</Form.Label>
          <Form.Control as="select" name="profession" id="professionArabic" dir='rtl' style={{width:'100%'}}>
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
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="handicap">Présence d'un handicap</Form.Label>
          <Form.Control as="select" name="handicap" id="handicap" style={{width:'100%'}}>
            <option value="handicap"> Mental </option>
            <option value="handicap"> Sensoriel </option>
            <option value="handicap"> Moteur </option>
            <option value="handicap"> Sans Handicap </option>

          </Form.Control></Col>
        <Col>
          <Form.Label htmlFor="handicapArabic" className='d-flex justify-content-end' >الإعاقة</Form.Label>
          <Form.Control as="select" name="handicap" id="handicapArabic" dir='rtl' style={{width:'100%'}}>
            <option value="handicapArabic">إعاقة ذهنية</option>
            <option value="handicapArabic">إعاقة حسية</option>
            <option value="handicapArabic">إعاقة حركية</option>
            <option value="handicapArabic">بدون إعاقة</option>


          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="addiction">Présence d'une addiction</Form.Label>
          <Form.Control as="select" name="addiction" id="addiction" style={{width:'100%'}}>
            <option value="addiction">Drogues</option>
            <option value="addiction">Alcoolique</option>
            <option value="addiction">Non Toxicomane</option>
            <option value="addiction">Non Définis </option>
          </Form.Control>
        </Col>
        <Col>
        <Form.Label htmlFor="addictionArabic" className='d-flex justify-content-end'>الإدمان</Form.Label>
            <Form.Control as="select" name="addiction" id="addictionArabic" dir='rtl' style={{width:'100%'}} className='d-flex justify-content-end'> 
              <option value="addictionArabic"> المخدرات</option>
              <option value="addictionArabic"> الكحول</option>
              <option value="addictionArabic"> غير مدمن</option>
              <option value="addictionArabic"> غير معروف</option>




            </Form.Control>
        </Col>
      </Row>
    </Form>
  );
};


export default InfoS;



