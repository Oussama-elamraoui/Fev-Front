import { Form, Row, Col } from "react-bootstrap";
import React from "react";

const InfoV = () => {
  return (
    <Form>
     
       <Row className="mt-5 mb-5">
        <Col sm={6}>
          
            <div className="p-float-label">
            <Form.Label htmlFor="violenceP">Violence physique</Form.Label>
            <Form.Control
              as="select"
              name="violenceP"
              id="violenceP"
              multiple
              // onChange={handleSelectedViolencePChange}
              // value={selectedViolenceP}
            >
              <option value="blessures">coups et blessures</option>
              <option value="empoisonnement">empoisonnement</option>
              <option value="brulure">brulure</option>
              <option value="avortement">avortement</option>
              <option value="enlèvement">enlèvement / détention</option>
              <option value="autre">autre</option>
            </Form.Control>
          </div>
         
            
          
            <div className="p-float-label">
            <Form.Label htmlFor="violenceSexuelle">Violence Sexuelle</Form.Label>
            <Form.Control
              as="select"
              name="violenceSexuelle"
              id="violenceSexuelle"
              multiple
              // onChange={handleViolenceSexuelleChange}
              // value={selectedViolenceSexuelle}
            >
              <option value="viol">viol</option>
              <option value="relation"> relation sexuelle aberrante</option>
              <option value="transmission">transmission d'une maladie sexuelle</option>
              <option value="sexuel">harcèlement verbal / sexuel</option>
              <option value="incestueuses"> Relations incestueuses</option>
              <option value="incitation">incitation a la prostitution</option>
            </Form.Control>
          </div>
          
          
        
          <div className="p-float-label">
            <Form.Label htmlFor="violencePsy">Violence psychologique morale</Form.Label>
            <Form.Control
              as="select"
              name="violencePsy"
              id="violencePsy"
              multiple
              // onChange={handleViolencePsyChange}
              // value={selectedViolencePsy}
            >
              <option value="diffamation">l'insulte et diffamation</option>
              <option value="infidélité">infidélité</option>
              <option value="psychologique">harcèlement psychologique</option>
              <option value="casser">casser les meubles</option>
              <option value="privation">privation de sortie</option>
              <option value="menace">menace / extorsion</option>
              <option value="enlèvement">enlèvement des enfants</option>
              <option value="attaquer">attaquer la maison</option>
              <option value="déchirer">déchirer ou bruler les vêtement</option>
              <option value="privation">privation de voir les enfants</option>
              <option value="dénigrement">dénigrement</option>
              <option value="discrimination">discrimination</option>
              
            </Form.Control>
          </div>
        


 
          <div className="p-float-label">
            <Form.Label htmlFor="violenceFamille">Violence liée aux droits de la famille</Form.Label>
            <Form.Control
              as="select"
              name="violenceFamille"
              id="violenceFamille"
              multiple
              // onChange={handleViolenceFamilleChange}
              // value={selectedViolenceFamille}
            >
            <option value="autree">autre</option>
            <option value="civil">Défaut d'inscription à l'état civil</option>
            <option value="Empêcher">Empêcher les enfants d'avoir des enfants</option>
            <option value="Absence">Absence et abandon</option>
            <option value="polygamie">La polygamie en contournant la loi</option>
            <option value="PrivationM">Privation de mariage</option>
            <option value="PrivationF">Privation de garde d'enfant</option>
            <option value="RefusE">Refus de rendre visite aux enfants</option>
            <option value="RefusM">Refus de prouver le mariage</option>
            <option value="reconnaîtreE">Ne pas reconnaître les enfants</option>
            <option value="pension">Non-paiement de la pension alimentaire</option>
            <option value="Expulsion">Expulsion du domicile conjugal</option>
            </Form.Control>
          </div>
       

         
          <div className="p-float-label">
            <Form.Label htmlFor="violenceEconomique">Violence économique et social</Form.Label>
            <Form.Control
              as="select"
              name="violenceEconomique"
              id="violenceEconomique"
              multiple
              // onChange={handleViolenceEconomiqueChange}
              // value={selectedViolenceEconomique}
            >
              <option value="Préscolaire">Préscolaire</option>
              <option value="primaire">primaire</option>
              <option value="Collège">Collège</option>
              <option value="Lycée">Lycée</option>
              <option value="Enseignement Traditionnel">Enseignement Traditionnel</option>
              <option value="Enseignement Non Conventionnelle">Enseignement Non Conventionnel</option>
              <option value="Formation Professionnel">Formation Professionnel</option>
              <option value="Non Scolariser">Non Scolariser</option>
              <option value="Non Définis">Non Définis</option>
            </Form.Control>
          </div>
        


         
          <div className="p-float-label">
            <Form.Label htmlFor="consequencePhysique">Les conséquences de la violence physique</Form.Label>
            <Form.Control
              as="select"
              name="consequencePhysique"
              id="consequencePhysique"
              multiple
              // onChange={handleConsequencePhysiqueChange}
              // value={selectedConsequencePhysique}
            >
              <option value="lésions">lésions</option>
              <option value="fractures">fractures</option>
              <option value="contusions">contusions</option>
              <option value="handicap">handicap permanente</option>
              <option value="blessures">blessures</option>
              <option value="brulures">brulures</option>
              <option value="mort">mort</option>
              <option value="avortement">avortement</option>
              <option value="saignement">saignement</option>
              <option value="amputation">amputation d'un organe ou privation d'une utilité</option>
              <option value="défloration">défloration</option>
            </Form.Control>
          </div>
       


        
          <div className="p-float-label">
            <Form.Label htmlFor="consequenceSexuelle">Les conséquences de la violence sexuelle</Form.Label>
            <Form.Control
              as="select"
              name="consequenceSexuelle"
              id="consequenceSexuelle"
              multiple
              // onChange={handleConsequenceSexuelleChange}
              // value={selectedConsequenceSexuelle}
            >
              <option value="sida">sida</option>
              <option value="MST">autre MST</option>
              <option value="grossesse">grossesse</option>
              <option value="blessures">blessures aux organes génitale</option>
            </Form.Control>
          </div>
     


         
          <div className="p-float-label">
            <Form.Label htmlFor="consequencePsy"> Les conséquences de la violence psychologique et morale</Form.Label>
            <Form.Control
              as="select"
              name="consequencePsy"
              id="consequencePsy"
              multiple
              // onChange={handleConsequencePsyChange}
              // value={selectedConsequencePsy}
            >
              <option value="traumatique">trouble de stress post traumatique</option>
              <option value="tentative">tentative de suicide</option>
              <option value="sommeil">trouble du sommeil</option>
              <option value="peur">la peur</option>
              <option value="comportement">trouble de comportement</option>
              <option value="nutritionnel">troubles nutritionnel</option>
              <option value="anxieux">troubles anxieux / dépression</option>
            </Form.Control>
          </div>
      

          
          <div className="p-float-label">
            <Form.Label htmlFor="violenceSpecial">Traite des êtres humains</Form.Label>
            <Form.Control
              as="select"
              name="violenceSpecial"
              id="violenceSpecial"
              multiple
              // onChange={handleViolenceSpecialChange}
              // value={selectedViolenceSpecial}
            >
              <option value="exploitationS">exploitation sexuelle</option>
              <option value="exploitationC">exploitation compulsive dans le domaine de travail</option>
              <option value="mendicité">mendicité</option>
              <option value="travailF">travail forcé</option>
              <option value="trafic">trafic d'organes</option>
              <option value="autre1">autre</option>
            </Form.Control>
          </div>
        

      
          <div className="p-float-label">
            <Form.Label htmlFor="lieuA"> Lieu de l'agression</Form.Label>
            <Form.Control
              as="select"
              name="lieuA"
              id="lieuA"
              multiple
              // onChange={handleLieuAChange}
              // value={selectedLieuA}
            >
              <option value="maison">la maison</option>
              <option value="maisonV">la maison de Victime</option>
              <option value="public">place public</option>
              <option value="school">lieu d'étude</option>
              <option value="travail">lieu de travail </option>
              <option value="maisonA">la maison d'agresseur</option>
            </Form.Control>
          </div>
      
           
        
          <div className="p-float-label">
            <Form.Label htmlFor="frequenceV">Fréquence de la violence</Form.Label>
            <Form.Control
              as="select"
              name="frequenceV"
              id="frequenceV"
              multiple
              // onChange={handleFrequenceVChange}
              // value={selectedFrequenceV}
            >
              <option value="seul">une seul fois</option>
              <option value="plus">plus qu'une seul fois</option>
            </Form.Control>
          </div>
          

        
   
   
  
        </Col>
        <Col sm={6}>
        <div className="p-float-label">
            <Form.Label htmlFor="violenceArabic">عنف جسدي</Form.Label>
            <Form.Control
              as="select"
              name="violenceArabic"
              id="violenceArabic"
              multiple
              // onChange={handleViolenceArabicChange}
              // value={selectedViolenceArabic}
            >
              <option value="blessures">الضرب و الجرح</option>
              <option value="empoisonnement">تسميم</option>
              <option value="brulure">الحرق</option>
              <option value="avortement">إجهاض</option>
              <option value="enlèvement">اختطاف/احتجاز</option>
              <option value="autre">أخر</option>
             
            </Form.Control>
          </div>
       

          

 
          <div className="p-float-label">
            <Form.Label htmlFor="violenceSexuelleArabic">عنف جنسي</Form.Label>
            <Form.Control
              as="select"
              name="violenceSexuelleArabic"
              id="violenceSexuelleArabic"
              multiple
              // onChange={handleViolenceSexuelleArabicChange}
              // value={selectedViolenceSexuelleArabic}
            >
              <option value="viol">اغتصاب</option>
              <option value="relation">علاقة جنسية شاذة</option>
              <option value="transmission">نقل مرض جنسي</option>
              <option value="sexuel">التحرش اللفظي/ الجنسي</option>
              <option value="incestueuses">زنا المحارم</option>
              <option value="incitation">التحريض على البغاء</option>
            </Form.Control>
          </div>
  

          
          <div className="p-float-label">
            <Form.Label htmlFor="violencePsyArabic">عنف نفسي/ معنوي</Form.Label>
            <Form.Control
              as="select"
              name="violencePsyArabic"
              id="violencePsyArabic"
              multiple
              // onChange={handleViolencePsyArabicChange}
              // value={selectedViolencePsyArabic}
            >
              <option value="diffamation">السب و القذف</option>
              <option value="infidélité">خيانة زوجية</option>
              <option value="psychologique">مضايقة نفسية</option>
              <option value="casser">تكسير أثاث المنزل</option>
              <option value="privation">الحرمان من الخروج</option>
              <option value="menace">التهديد /الابتزاز</option>
              <option value="enlèvement">اختطاف الأبناء</option>
              <option value="attaquer">التهجم على المسكن</option>
              <option value="déchirer">تمزيق أو حرق ملابس</option>
              <option value="privation">الحرمان من رؤية الأبناء</option>
              <option value="dénigrement">التحقير</option>
              <option value="discrimination">التمييز</option>
            </Form.Control>
          </div>
        

        
          <div className="p-float-label">
            <Form.Label htmlFor="violenceFamilleArabic">العنف المتعلق بالحقوق الاسرية</Form.Label>
            <Form.Control
              as="select"
              name="violenceFamilleArabic"
              id="violenceFamilleArabic"
              multiple
              // onChange={handleViolenceFamilleArabicChange}
              // value={selectedViolenceFamilleArabic}
            >
              <option value="autree">آخر</option>
              <option value="civil">عدم التسجيل بالحالة المدنية</option>
              <option value="Empêcher">المنع من الإنجاب</option>
              <option value="Absence">الغياب و الهجر</option>
              <option value="polygamie">تعدد الزوجات بالتحايل على القانون</option>
              <option value="PrivationM">الحرمان من الزواج</option>
              <option value="PrivationF">الحرمان من حضانة الأطفال</option>
              <option value="RefusE"> الحرمان من زيارة الأطفال</option>
              <option value="RefusM">رفض ثبوت الزوجية</option>
              <option value="reconnaîtreE">عدم الاعتراف بالأطفال</option>
              <option value="pension">عدم اداء النفقة</option>
              <option value="Expulsion">الطرد من بيت الزوجية</option>

            </Form.Control>
          </div>
    


          <div className="p-float-label">
            <Form.Label htmlFor="violenceEconomiqueArabic"> العنف الاقتصادي والاجتماعي
              </Form.Label>
            <Form.Control
              as="select"
              name="violenceEconomiqueArabic"
              id="violenceEconomiqueArabic"
              multiple
              // onChange={handleViolenceEconomiqueArabicChange}
              // value={selectedViolenceEconomiqueArabic}
            >
              <option value="Préscolaire">آخر</option>
              <option value="primaire">الحرمان من العمل</option>
              <option value="Collège">السرقة</option>
              <option value="Lycée">الحرمان من التطبيب</option>
              <option value="Préscolaire">الحرمان من الدراسة</option>
              <option value="primaire">الاستيلاء على أغراض خاصة أو ممتلكات</option>
              <option value="Collège">الحرمان من الميراث</option>
              <option value="Lycée">الحرمان من وثائق رسمية</option>
              <option value="Lycée">الطرد التعسفي من العمل</option>
              <option value="Enseignement Traditionnel">الطرد من بيت العائلة </option>
              <option value="Enseignement Non Conventionnelle">عدم توفير سكن مستقل</option>
              <option value="autre">عدم الانفاق على الاسرة</option>
            </Form.Control>
          </div>
    


    
          <div className="p-float-label">
            <Form.Label htmlFor="consequencePhysiqueArabic">أثار العنف الجسدي
             </Form.Label>
            <Form.Control
              as="select"
              name="consequencePhysiqueArabic"
              id="consequencePhysiqueArabic"
              multiple
              // onChange={handleConsequencePhysiqueArabicChange}
              // value={selectedConsequencePhysiqueArabic}
            >
              
              <option value="lésions">خدوش</option>
              <option value="fractures">كسور</option>
              <option value="contusions">رضوض</option>
              <option value="handicap">عاهة مستديمة</option>
              <option value="blessures">جروح</option>
              <option value="brulures">حروق</option>
              <option value="mort">موت</option>
              <option value="avortement">إسقاط الجنين</option>
              <option value="saignement">نزيف</option>
              <option value="amputation">بتر عضو أو حرمان من منفعة</option>
              <option value="défloration">افتضاض البكرة</option>
            </Form.Control>
          </div>
        

          <div className="form-group">
          <div className="p-float-label">
            <Form.Label htmlFor="consequenceSexuelleArabic">      أثار العنف الجنسي
             </Form.Label>
            <Form.Control
              as="select"
              name="consequenceSexuelleArabic"
              id="consequenceSexuelleArabic"
              multiple
              // onChange={handleConsequenceSexuelleArabicChange}
              // value={selectedConsequenceSexuelleArabic}
            >
              <option value="sida">السيدا</option>
              <option value="MST">الأمراض المنقولة جنسيا الأخرى</option>
              <option value="grossesse">حمل</option>
              <option value="blessures">إصابات الأعضاء التناسلية</option>
             
            
            </Form.Control>
          </div>
          </div>

          <div className="form-group">
          <div className="p-float-label">
            <Form.Label htmlFor="consequencePsyArabic">        أثار العنف النفسي
             </Form.Label>
            <Form.Control
              as="select"
              name="consequencePsyArabic"
              id="consequencePsyArabic"
              multiple
              // onChange={handleConsequencePsyArabicChange}
              // value={selectedConsequencePsyArabic}
            >
              <option value="traumatique">اضطراب ما بعد الصدمة</option>
              <option value="suicide">محاولة انتحار</option>
              <option value="sommeil">إختلال النوم</option>
              <option value="peur">الخوف</option>
              <option value="comportement">مشكلة السلوك</option>
              <option value="nutritionnel">اضطرابات التغذية</option>
              <option value="anxieux ">اضطرابات القلق/الاكتئاب</option>
    
            </Form.Control>
          </div>
          </div>


           <div className="form-group">
          <div className="p-float-label">
            <Form.Label htmlFor="violenceSpecialArabic">  الإتجار بالبشر
             </Form.Label>
            <Form.Control
              as="select"
              name="violenceSpecialArabic"
              id="violenceSpecialArabic"
              multiple
              // onChange={handleViolenceSpecialArabicChange}
              // value={selectedViolenceSpecialArabic}
            >
              <option value="exploitationS">الاستغلال الجنسي</option>
              <option value="exploitationC">العمل الجبري</option>
              <option value="mendicité">التسول</option>
              <option value="travailF">السخرة</option>
              <option value="trafic">نزع الاعضاء او الانسجة البشرية</option>
              <option value="autre"> اخر</option>
            </Form.Control>
          </div>
          </div>

          <div className="form-group">
          <div className="p-float-label">
            <Form.Label htmlFor="lieuAArabic">مكان الاعتداء
             </Form.Label>
            <Form.Control
              as="select"
              name="lieuAArabic"
              id="lieuAArabic"
              multiple
              // onChange={handleLieuAArabicChange}
              // value={selectedLieuAArabic}
            >
              <option value="maison">بيت الزوجية</option>
              <option value="maisonV">منزل الضحية</option>
              <option value="public">مرفق عمومي</option>
              <option value="school">مكان الدراسة</option>
              <option value="travail"> مكان العمل</option>
              <option value="maisonA">بيت المعتدي</option>
            </Form.Control>
          </div>
          </div>

          <div className="form-group">
          <div className="p-float-label">
            <Form.Label htmlFor="frequenceVArabic">وثيرة العنف
             
             </Form.Label>
            <Form.Control
              as="select"
              name="frequenceVArabic"
              id="frequenceVArabic"
              multiple
              // onChange={handleFrequenceVArabicChange}
              // value={selectedFrequenceVArabic}
            >
              <option value="seul">أول مرة</option>
              <option value="plus">اكثر من مرة</option>
            </Form.Control>
          </div>
          </div>


    
        </Col>
      </Row>
    </Form>
  );
};

export default InfoV;
