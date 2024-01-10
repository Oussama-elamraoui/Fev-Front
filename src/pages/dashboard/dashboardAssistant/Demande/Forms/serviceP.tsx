import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';


const ServiceP = () => {
  
    

  return (
    <Form>
     
     <Row className="mt-5 mb-5">
        <Col sm={6}>


          <div className="d-flex flex-column">
            <Form.Label htmlFor="serviceProdigue"> Services prodigués  </Form.Label>
            <Form.Control as="select" name="serviceProdigue" id="serviceProdigue">
              <option value="">Sélectionner</option>

              <option value="soinsP">  les soins primaires</option>
              <option value="sensibilisation"> sensibilisation contre la violence</option>
              <option value="traitementMST"> traitement préventif contre les MST</option>
              <option value="contraception">contraception d'urgence</option>
              <option value="suivie">suivie psychologique</option>
              <option value="signalementt">  signalement</option>
              <option value="orientationO"> orientation vers ONG</option>
              <option value="orientationA"> orientation vers une association spécialisé</option>

            </Form.Control>
          </div>


          <div className="d-flex flex-column">
            <Form.Label htmlFor="serviceHospitalier"> Services hospitalier </Form.Label>
            <Form.Control as="select" name="serviceHospitalier" id="serviceHospitalier">
              <option value="">Sélectionner</option>
              {/* Add options dynamically according to your data */}
              <option value="serviceHospitalier">prévention</option>
              <option value="serviceHospitalier">médicale</option>
              {/* Add more options */}
            </Form.Control>
          </div>

          

          <div className="d-flex flex-column">
            <Form.Label htmlFor="certificatMedical">Délivrance d'un CM   </Form.Label>
            <Form.Control as="select" name="certificatMedical" id="certificatMedical">
              <option value="">Sélectionner</option>
              <option value="certificatMedical8">certificat avec repos -08  jours</option>
              <option value="certificatMedical821">certificat avec repos entre 08 a 21 jours</option>
              <option value="certificatMedical21">certificat avec repos 21 jours au plus</option>
              <option value="certificatMedical1">certificat sans repos</option>

            </Form.Control>
          </div>

          

          <div className="d-flex flex-column">
            <Form.Label htmlFor="orientationEtab">Orientation vers d'autres établissement</Form.Label>
            <Form.Control as="select" name="orientationEtab" id="orientationEtab">
              <option value="">Sélectionner</option>
              <option value="police">la police</option>
              <option value="gendarmerie">la gendarmerie royal</option>
              <option value="cours">cours</option>
            
            </Form.Control>
          </div>

          

          <div className="d-flex flex-column">
            <Form.Label htmlFor="orientationSpecial">Orientation vers un spécialiste</Form.Label>
            <Form.Control as="select" name="orientationSpecial" id="orientationSpecial">
              <option value="">Sélectionner</option>
              <option value="pédiatre">pédiatre</option>
              <option value="pedo">pedo-chirurgie</option>
              <option value="gynécologue">gynécologue</option>
              <option value="traumatologue">traumatologue</option>
              <option value="radiologue">radiologue</option>
              <option value="biologique">bilan biologique</option>
              <option value="médicolégal">médecin médicolégal</option>
              <option value="psychologue">psychologue</option>
              <option value="autre">autre</option>
            </Form.Control>
          </div>
        
        



          
        </Col>
        <Col sm={6}>

        <div className="d-flex flex-column">
            <Form.Label htmlFor="serviceProdigueArabic">الخدمات المقدمة</Form.Label>
            <Form.Control as="select" name="serviceProdigueArabic" id="serviceProdigueArabic">
              <option value="">اختيار</option>
              <option value="soinsP">علاجات اولية</option>
              <option value="sensibilisation">الاستفادة من الأنشطة التحسيسية حول العنف</option>
              <option value="traitementMST">العلاج الوقائي ضد الأمراض المتنقلة جنسيا</option>
              <option value="contraception">حبوب المنع الاستعجالي للحمل</option>
              <option value="suivie">متابعة نفسية</option>
              <option value="signalementt">  التبليغ القضائي</option>
              <option value="orientationO">توجيه نحو منظمة متخصصة في محاربة العنف</option>
              <option value="orientationA">توجيه نحو جمعية متخصصة في محاربة العنف</option>
            </Form.Control>
          </div>



          <div className="d-flex flex-column">
            <Form.Label htmlFor="serviceHospitalierArabic"> استشفاء </Form.Label>
            <Form.Control as="select" name="serviceHospitalierArabic" id="serviceHospitalierArabic">
              <option value="">اختيار</option>
              {/* Add options dynamically according to your data */}
              <option value="serviceHospitalierArabic">لدواعي حمائية</option>
              <option value="serviceHospitalierArabic"> لدواعي طبية</option>
              {/* Add more options */}
            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="orientationSpecialArabic">تسليم شهادة طبية </Form.Label>
            <Form.Control as="select" name="orientationSpecialArabic" id="orientationSpecialArabic">
              <option value="">اختيار</option>
              <option value="certificatMedicalArabic8">اقل من 8 أيام</option>
              <option value="certificatMedicalArabic821">بين 08 و 21 يوم</option>
              <option value="certificatMedicalArabic21">اكثر من 21 يوم</option>
              <option value="certificatMedicalArabic">شهادة طبية بدون أيام</option>
          
            </Form.Control>
          </div>

          <div className="d-flex flex-column">
            <Form.Label htmlFor="orientationEtabAr">توجيه نحو مصالح خارجية</Form.Label>
            <Form.Control as="select" name="orientationEtabAr" id="orientationEtabAr">
              <option value="">اختيار</option>
              <option value="police">الشرطة</option>
              <option value="gendarmerie">الدرك الملكي</option>
              <option value="cours">المحكمة</option>
            </Form.Control>
          </div>

  

          <div className="d-flex flex-column">
            <Form.Label htmlFor="orientationSpecialArabic">توجيه نحو طبيب مختص</Form.Label>
            <Form.Control as="select" name="orientationSpecialArabic" id="orientationSpecialArabic">
              <option value="">اختيار</option>
              <option value="pédiatre">طب الأطفال</option>
              <option value="pedo">جراحة الأطفال</option>
              <option value="gynécologue">طب النساء و التوليد</option>
              <option value="traumatologue">جراحة العظام و المفاصل</option>
              <option value="radiologue">طب الأشعة</option>
              <option value="biologique">طب البيولوجيا</option>
              <option value="médicolégal">الطب شرعي</option>
              <option value="psychologue">لطب نفسي</option>
              <option value="autre">اخر</option>
            </Form.Control>
          </div>

          


    
          


          

        </Col>
    
      </Row>
    </Form>
  );
};


export default ServiceP;



