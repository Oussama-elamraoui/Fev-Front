import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
const InfoP = () => {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [input, setInput] = useState('');

  const handleKeyboardClick = () => {
    setShowKeyboard(!showKeyboard);
  };

  const onKeyPress = (button: string) => {
    // Handle keyboard input and update the text input value
    setInput((prevInput) => prevInput + button);
  };

  const arabicLayout = {
    default: [
      'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د',
      'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'ئ',
      'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'q'
    ],
    shift: [
      'َ', 'ً', 'ُ', 'ٌ', 'ٍ', 'ِ', 'ّ', 'ْ', 'ـ', '؛', '؟', '!',
      'ِ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ',
      'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'ٍ', 'Q'
    ],
  };



  return (
    <Form>
      <Row>
        <Col>
          <div className="">
            <label htmlFor="dateSignalement">Date du signalement</label>
            <input
              style={{ width: '100%' }}
              type="date"
              className="form-control"
              id="dateSignalement"
              name="dateSignalement"
            />
          </div >
        </Col>
        <Col>
          <label htmlFor="dateSignalementArabic" className='d-flex justify-content-end'>تاريخ التصريح</label>
          <input
            style={{ width: '100%' }}
            type="date"
            id="dateSignalementArabic"
            name="dateSignalementArabic"
            className='d-flex justify-content-end form-control'

          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="nom">Nom</Form.Label>
          <Form.Control type="text" name="nom" id="nom" style={{ width: '100%' }} placeholder='Nom' />
        </Col>
        <Col>
          <Form.Label htmlFor="nomAr" className='d-flex justify-content-end'>الإسم العائلي</Form.Label>
          <Form.Control type="text" name="nom" id="nomAr" style={{ width: '100%' }} placeholder='الإسم العائلي' dir="rtl" />
          {/* <input placeholder='cc' dir='rtl'></input> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="prenom">Prénom</Form.Label>
          <Form.Control type="text" name="prenom" id="prenom" style={{ width: '100%' }} placeholder='prénom' />
        </Col>
        <Col>
          <Form.Label htmlFor="prenomAr" className='d-flex justify-content-end'> الإسم الشخصي </Form.Label>
          <Form.Control type="text" name="prenom" id="prenomAr" className='d-flex justify-content-end' style={{ width: '100%' }} dir="rtl" placeholder='الإسم الشخصي ' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="cin">CIN</Form.Label>
          <Form.Control type="text" name="cin" id="cin" style={{ width: '100%' }} />
        </Col>
        <Col>
          <Form.Label htmlFor="cinAr" className='d-flex justify-content-end'> البطاقة الوطنية للتعريف</Form.Label>
          <Form.Control type="text" name="cin" id="cinAr" className='d-flex justify-content-end' placeholder=' البطاقة الوطنية للتعريف' dir='rtl' style={{ width: '100%' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="adresse">Adresse</Form.Label>
          <Form.Control type="text" name="adresse" id="adresse" style={{ width: '100%' }} placeholder='adresse' />
        </Col>
        <Col>
          <Form.Label htmlFor="adresseAr" className='d-flex justify-content-end'> العنوان</Form.Label>
          <Form.Control type="text" name="adresse" id="adresseAr" className='d-flex justify-content-end' placeholder='العنوان' dir='rtl' style={{ width: '100%' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="dateNaissance">Date de naissance</Form.Label>
          {/* Replace the <p-calendar> with an appropriate Date picker component */}
          <Form.Control type="date" name="dateNaissance" id="dateNaissance" style={{ width: '100%' }} />
        </Col>
        <Col>
          <Form.Label htmlFor="dateNaissanceArabic" className='d-flex justify-content-end'>تاريخ الإزدياد</Form.Label>
          {/* Replace the <p-calendar> with an appropriate Date picker component */}
          <Form.Control type="date" name="dateNaissance" id="dateNaissanceArabic" className='d-flex justify-content-end' style={{ width: '100%' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="lieuNaissance">Lieu de naissance</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control name="lieuNaissance" id="lieuNaissance" style={{ width: '100%' }} placeholder='Lieu de naissance' />
        </Col>
        <Col>
          <Form.Label htmlFor="lieuNaissanceArabic" className='d-flex justify-content-end'>مكان الإزدياد</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control name="lieuNaissance" id="lieuNaissanceArabic" style={{ width: '100%' }} className='d-flex justify-content-end' placeholder='مكان الإزدياد' dir='rtl'/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="nationalite">Nationalité</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control as="select" name="nationalite" id="nationalite" style={{ width: '100%' }} placeholder='Select Nationalité'>
            <option value="country1">marocaine</option>
            <option value="country2">étranger </option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="nationaliteArabic" className='d-flex justify-content-end'>الجنسية</Form.Label>
          <Form.Control as="select" name="nationalite" id="nationaliteArabic" className='d-flex justify-content-end' placeholder='اختر الجنسية' dir='rtl' style={{ width: '100%' }}>
            <option value="countryAR1">مغربية</option>
            <option value="countryAR2">اجنبي</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="dejaDeclare">Avez-vous déjà signalé des actes de violence ?</Form.Label>
          <Form.Control as="select" name="dejaDeclare" id="dejaDeclare" style={{ width: '100%' }} placeholder='Select' defaultValue={''}>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="dejaDeclareArabic" className='d-flex justify-content-end'>هل سبق التبليغ عن العنف ؟</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control as="select" name="dejaDeclare" id="dejaDeclareArabic" className='d-flex justify-content-end' style={{ width: '100%' }} dir='rtl'>
            {/* Add options dynamically according to your data */}
            <option value="yes">نعم</option>
            <option value="no">لا</option>
            {/* Add more options */}
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="lieuDeclaration">Où avez-vous signalé cela ?</Form.Label>
          <Form.Control as="select" name="lieuDeclaration" id="lieuDeclaration" style={{ width: '100%' }}>
            <option value="city4">Sidi Bouknadel</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="lieuDeclarationArabic" className='d-flex justify-content-end'>اين تم التبليغ ؟</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control as="select" name="lieuDeclaration" id="lieuDeclarationArabic" className='d-flex justify-content-end' style={{ width: '100%' }} dir='rtl'>
            <option value="cityAR2">سيدي بوقنادل</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="agresseurs">Nombre d'agresseurs</Form.Label>
          <Form.Control
            style={{ width: '100%' }}
            type="number"
            name="nombreAgresseur"
            id="agresseurs"
            placeholder="Nombre d'agresseurs"
          // Add onChange event handler to call generateAgresseurs() function
          // onChange={() => generateAgresseurs()}
          />
        </Col>
        <Col>
          <Form.Label htmlFor="agresseursArabic" className='d-flex justify-content-end floatLabelAr'>عدد المعتدين</Form.Label>
          <Form.Control
            style={{ width: '100%' }}
            className='d-flex justify-content-end'
            type="number"
            name="nombreAgresseur"
            id="agresseursArabic"
            dir='rtl'
            placeholder="عدد المعتدين"
          // Add onChange event handler to call generateAgresseurs() function
          // onChange={() => generateAgresseurs()}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="raisonVisite">Raison de la visite</Form.Label>
          {/* Replace the p-multiSelect with an appropriate multi-select component */}
          <Form.Control as="select" name="raisonVisite" id="raisonVisite" style={{ width: '100%' }}>
            {/* Add options dynamically according to your data */}
            <option value="reason1"> Assistance Sociale</option>
            <option value="reason2">Certificat Médicale</option>
            <option value="reason3">PEC Psychologique </option>
            <option value="reason4">PEC Médicale</option>
            <option value="reason5">renseignement</option>
            <option value="reason6">Autre</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="raisonVisiteArabic" className='floatLabelAr d-flex justify-content-end' > أسباب الزيارة </Form.Label>
          <Form.Control as="select" type='select' name="raisonVisite" id="raisonVisiteArabic" dir='rtl' style={{width:'100%'}}>
            {/* Add options dynamically according to your data */}
            <option value="reason1AR">طلب المساعدة اجتماعية </option>
            <option value="reason2AR">طلب شهادة طبية </option>
            <option value="reason2AR">تكفل نفسي </option>
            <option value="reason2AR">تكفل طبي </option>
            <option value="reason2AR">طلب المعلومات  </option>
            <option value="reason2AR">آخر </option>
          </Form.Control>
        </Col>
      </Row>




    </Form>
  );
};


export default InfoP;



