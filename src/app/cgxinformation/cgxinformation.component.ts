import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cgxinformation',
  templateUrl: './cgxinformation.component.html',
  styleUrls: ['./cgxinformation.component.css']
})
export class CGXInformationComponent implements OnInit {

  myforminner: FormGroup;

  public data: any;
  public serverUrl: any;
  public tokenViaCookie: any;
  public stateArray: any = [];
  public cityArray: any = [];

  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, public formbuilder: FormBuilder, 
    public activeroute: ActivatedRoute, public cookie: CookieService, public apiService: ApiService) {
    window.scrollTo(500, 0);

    this.apiService.gettemptoken().subscribe((res: any) => {
      this.cookie.set('jwtToken', res.token);
    });
    this.genarateForm();

  }

  ngOnInit() {

    this.getStatelist();
    this.getCitylist();
  }

  /**genarate Form */
genarateForm(){
  this.myforminner = this.formbuilder.group({

    Physician: ['', Validators.required],
    telephone: ['', Validators.required],
    fax: ['', Validators.required],
    address: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    zip: ['', Validators.required],

    diabetic: ['', Validators.required],
    supplies: ['', Validators.required],
    relief: ['', Validators.required],
    creams: ['', Validators.required],
    braces: ['', Validators.required],
    walker: ['', Validators.required],
    scooter: ['', Validators.required],
    allergies: ['', Validators.required],
    catheters: ['', Validators.required],
    cancer: ['', Validators.required],

    personalhistoryname: [''],
    personalhistorytype: [''],
    personalhistoryrelationrype: [''],
    personalhistorydegreediagnose: [''],
    personalhistorydgediagnosed: [''],
    personalhistoryagedtdeath: [''],

    familyhistoryname: [''],
    familyhistorytype: [''],
    familyhistoryrelationtype: [''],
    familyhistorydegreediagnose: [''],
    familyhistoryagediagnosed: [''],
    familyhistoryageatdeath: [''],

    mothername: [''],
    mothertype: [''],
    motherrelationtype: [''],
    motherdegreediagnose: [''],
    motheragediagnosed: [''],
    motherageatdeath: [''],

    fathername: [''],
    fathertype: [''],
    fatherrelationtype: [''],
    fatherdegreediagnose: [''],
    fatheragediagnosed: [''],
    fatherageatdeath: [''],
    
    daughtername: [''],
    daughtertype: [''],
    daughterrelationtype: [''],
    daughterdegreediagnose: [''],
    daughteragediagnosed: [''],
    daughterageatdeath: [''],

    sonname: [''],
    sontype: [''],
    sonrelationtype: [''],
    sondegreediagnose: [''],
    sonagediagnosed: [''],
    sonageatdeath: [''],


    brothername: [''],
    brothertype: [''],
    brotherrelationtype: [''],
    brotherdegreediagnose: [''],
    brotheragediagnosed: [''],
    brotherageatdeath: [''],


    sistername: [''],
    sistertype: [''],
    sisterrelationtype: [''],
    sisterdegreediagnose: [''],
    sisteragediagnosed: [''],
    sisterageatdeath: [''],


    nephewname: [''],
    nephewtype: [''],
    nephewrelationtype: [''],
    nephewdegreediagnose: [''],
    nephewagediagnosed: [''],
    nephewageatdeath: [''],


    niecename: [''],
    niecetype: [''],
    niecerelationtype: [''],
    niecedegreediagnose: [''],
    nieceagediagnosed: [''],
    niecengeatdeath: [''],

    unclename: [''],
    uncletype: [''],
    unclerelationtype: [''],
    uncledgreediagnose: [''],
    uncleugediagnosed: [''],
    uncleageatdeath: [''],

    autnname: [''],
    autntype: [''],
    autnrelationtype: [''],
    autndegreediagnose: [''],
    autnagediagnosed: [''],
    autnageatdeath: [''],

    momsfatherName: [''],
    momsfathertype: [''],
    momsfatherrelationtype: [''],
    momsfatherdegreediagnose: [''],
    momsfatheragediagnosed: [''],
   momsmatherageatdeath: [''],
 
   momsmothername: [''],
   momsmothertype: [''],
   momsmotherrelationtype: [''],
   momsmotherdegreediagnose: [''],
   momsmotheragediagnosed: [''],
   momsmotherageatdeath: [''],

   othername: [''],
   othertype: [''],
   otherrelationtype: [''],
   otherdegreediagnose: [''],
   otheragediagnosed: [''],
   otherageatdeath: [''],
 
 
  });
}
  getStatelist() {
    this.apiService.getJsonObject('assets/json/state.json').subscribe((res: any) => {
      this.stateArray = res;
      console.log(this.stateArray);
    });
  }

  getCitylist() {
    this.apiService.getJsonObject('assets/json/usa-cities.json').subscribe((res: any) => {
      this.cityArray = res;
    });
  }

  

 

  doSubmitinner() {
    // console.log('ok');
    // this.data = this.myform.value;
    // console.log(this.data);

    for (let i in this.myforminner.controls) {
      this.myforminner.controls[i].markAsTouched();
    }

    if (this.myforminner.valid) {

      this.formpopupinnerViewModal();

     
       
      window.scrollTo(500, 0);

      // let  link2 = this.serverUrl +;
      let data = {
        source: "CGXInformationList",
        token: this.tokenViaCookie,
        data: this.myforminner.value
      };
      this.apiService.addDataWithoutToken(data, 'addorupdatedata').subscribe((res:any) => {

        if (res.status == 'success') {
          this.genarateForm();
          
          // setTimeout(() => {
            this.myforminner.reset();
           
            window.scrollTo(500, 0);
          // }, 500);

            setTimeout(() => {
            this.myforminner.reset();
           
            window.scrollTo(500, 0);
          }, 500);
         
          console.log("res");
       
          // this.router.navigateByUrl('/CGXInformation');

        }
      });
    }
  }

  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }

  formpopupinnerViewModal() {

    const dialogGenreRef = this.dialog.open(Formpopupinner, {
      panelClass: ['modal-sm', 'infomodal'],
      //disableClose: true,
    });

    dialogGenreRef.afterClosed().subscribe(result => {
    });
    setTimeout(function () {
      dialogGenreRef.close();
    }, 2000);
  }


}





@Component({
  selector: 'Formpopupinner',
  templateUrl: 'formpopupinner.html',
})
export class Formpopupinner {



  constructor(public dialogRef: MatDialogRef<Formpopupinner>,
              /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}