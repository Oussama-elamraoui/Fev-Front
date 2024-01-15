import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './style.css'
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
  const [cinValue, setCinValue] = useState<string>('');

  const handleCinArChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setCinValue(inputValue);
  };
  const [dateNaissanceValue, setDateNaissanceValue] = useState<string>('');

  const handleDateNaissanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setDateNaissanceValue(inputValue);
  };
  const [selectedNationalite, setSelectedNationalite] = useState(''); // State for the first dropdown
  const [selectedNationaliteArabic, setSelectedNationaliteArabic] = useState(''); // State for the second dropdown
  const handleNationaliteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === 'marocaine') {
      setSelectedNationaliteArabic('مغربية');
      setSelectedNationalite('marocaine');
    };
    if (selectedValue === 'مغربية') {
      setSelectedNationalite('marocaine');
      setSelectedNationaliteArabic('مغربية');
    }
    if (selectedValue === 'اجنبي') {
      setSelectedNationalite('étranger');
      setSelectedNationaliteArabic('اجنبي');

    }
    if (selectedValue === 'étranger') {
      setSelectedNationalite('étranger');
      setSelectedNationaliteArabic('اجنبي');
    }
  }
  const [selectedDeclaration, setSelectedDeclaration] = useState('')
  const [selectedDeclarationArabic, setSelectedDeclarationArabic] = useState('')
  const handleExdeclaration = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === 'yes') {
      setSelectedDeclaration('yes')
      setSelectedDeclarationArabic('yes')
    }
    if (value === 'no') {
      setSelectedDeclaration('no')
      setSelectedDeclarationArabic('no')
    }

  }
  const [nombreAgresseur, setNombreAgresseur] = useState<number | undefined>(undefined);

  const handleNombreAgresseurChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setNombreAgresseur(newValue);
  };
  const[raisonVisite,setRaisonVisite]=useState('')
  const[raisonVisiteAr,setRaisonVisiteAr]=useState('')
  const handleRaisonVisite=(event: React.ChangeEvent<HTMLInputElement>)=>{
    const value=event.target.value
   if(value==='Assistance Sociale' || value==='طلب المساعدة اجتماعية'){
    setRaisonVisite('Assistance Sociale')    
    setRaisonVisiteAr('طلب المساعدة اجتماعية')
   };
   if(value==='Certificat Médicale'|| value==='طلب شهادة طبية'){
    setRaisonVisite('Certificat Médicale');   
    setRaisonVisiteAr('طلب شهادة طبية');
   }
   if(value==='PEC Psychologique'|| value==='تكفل نفسي'){
    setRaisonVisite('PEC Psychologique'); 
    setRaisonVisiteAr('تكفل نفسي');
   };
   if(value==='PEC Médicale'|| value==='تكفل طبي'){
    setRaisonVisite('PEC Médicale');
    setRaisonVisiteAr('تكفل طبي');
   };
   if(value==='Renseignement' || value==='طلب المعلومات'){
    setRaisonVisite('Renseignement');
    setRaisonVisiteAr('طلب المعلومات');
   };
   if(value==='Autre' || value==='آخر'){
    setRaisonVisite('Autre');
    setRaisonVisiteAr('آخر');
   };

  }
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
          <Form.Control type="text" name="cin" id="cin" style={{ width: '100%' }} placeholder='CIN' value={cinValue} onChange={handleCinArChange} />
        </Col>
        <Col>
          <Form.Label htmlFor="cinAr" className='d-flex justify-content-end'> البطاقة الوطنية للتعريف</Form.Label>
          <Form.Control type="text" name="cin" id="cinAr" className='d-flex justify-content-end' placeholder=' البطاقة الوطنية للتعريف' dir='rtl' style={{ width: '100%' }} value={cinValue} onChange={handleCinArChange} />
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
          <Form.Control type="date" name="dateNaissance" id="dateNaissance" style={{ width: '100%' }} value={dateNaissanceValue}
            onChange={handleDateNaissanceChange} />
        </Col>
        <Col>
          <Form.Label htmlFor="dateNaissanceArabic" className='d-flex justify-content-end'>تاريخ الإزدياد</Form.Label>
          {/* Replace the <p-calendar> with an appropriate Date picker component */}
          <Form.Control type="date" name="dateNaissance" id="dateNaissanceArabic" className='d-flex justify-content-end' style={{ width: '100%' }} value={dateNaissanceValue}
            onChange={handleDateNaissanceChange} />
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
          <Form.Control name="lieuNaissance" id="lieuNaissanceArabic" style={{ width: '100%' }} className='d-flex justify-content-end' placeholder='مكان الإزدياد' dir='rtl' />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="nationalite">Nationalité</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control as="select" name="nationalite" id="nationalite" style={{ width: '100%' }} placeholder='Select Nationalité' defaultValue='' value={selectedNationalite} onChange={handleNationaliteChange}>
            <option value="marocaine">marocaine</option>
            <option value="étranger">étranger</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="nationaliteArabic" className='d-flex justify-content-end'>الجنسية</Form.Label>
          <Form.Control as="select" name="nationalite" id="nationaliteArabic" className='d-flex justify-content-end' placeholder='اختر الجنسية' defaultValue='' dir='rtl' style={{ width: '100%' }} value={selectedNationaliteArabic} onChange={handleNationaliteChange}>
            <option value="مغربية" >مغربية</option>
            <option value="اجنبي">اجنبي</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="dejaDeclare">Avez-vous déjà signalé des actes de violence?</Form.Label>
          <Form.Control as="select" name="dejaDeclare" id="dejaDeclare" style={{ width: '100%' }} placeholder='Select' defaultValue={''} value={selectedDeclaration} onChange={handleExdeclaration}>
            <option value="yes">Oui</option>
            <option value="no">Non</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="dejaDeclareArabic" className='d-flex justify-content-end'>هل سبق التبليغ عن العنف ؟</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control as="select" name="dejaDeclare" id="dejaDeclareArabic" className='d-flex justify-content-end' style={{ width: '100%' }} dir='rtl' defaultValue={''} value={selectedDeclarationArabic} onChange={handleExdeclaration}>
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
            <option value="Sidi Bouknadel">Sidi Bouknadel</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="lieuDeclarationArabic" className='d-flex justify-content-end'>اين تم التبليغ ؟</Form.Label>
          {/* Replace the <p-dropdown> with an appropriate dropdown component */}
          <Form.Control as="select" name="lieuDeclaration" id="lieuDeclarationArabic" className='d-flex justify-content-end' style={{ width: '100%' }} dir='rtl'>
            <option value="سيدي بوقنادل"> سيدي بوقنادل</option>
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
            value={nombreAgresseur}
            onChange={handleNombreAgresseurChange}
            defaultValue={0}
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
            defaultValue={0}
            placeholder="عدد المعتدين"
            value={nombreAgresseur}
            onChange={handleNombreAgresseurChange}

          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="raisonVisite">Raison de la visite</Form.Label>
          {/* Replace the p-multiSelect with an appropriate multi-select component */}
          <Form.Control as="select" name="raisonVisite" id="raisonVisite" style={{ width: '100%' }} defaultValue={''} value={raisonVisite} onChange={handleRaisonVisite}>
            {/* Add options dynamically according to your data */}
            <option value="Assistance Sociale">Assistance Sociale</option>
            <option value="Certificat Médicale">Certificat Médicale</option>
            <option value="PEC Psychologique">PEC Psychologique</option>
            <option value="PEC Médicale">PEC Médicale</option>
            <option value="Renseignement">renseignement</option>
            <option value="Autre">Autre</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Label htmlFor="raisonVisiteArabic" className='floatLabelAr d-flex justify-content-end' > أسباب الزيارة </Form.Label>
          <Form.Control as="select" type='select' name="raisonVisite" id="raisonVisiteArabic" dir='rtl' style={{ width: '100%' }} defaultValue={''} value={raisonVisiteAr} onChange={handleRaisonVisite}>
            {/* Add options dynamically according to your data */}
            <option value="طلب المساعدة اجتماعية">طلب المساعدة اجتماعية</option>
            <option value="طلب شهادة طبية">طلب شهادة طبية</option>
            <option value="تكفل نفسي">تكفل نفسي</option>
            <option value="تكفل طبي"> تكفل طبي </option>
            <option value="طلب المعلومات">طلب المعلومات</option>
            <option value="آخر">آخر</option>
          </Form.Control>
        </Col>
      </Row>




    </Form>
  );
};


export default InfoP;



