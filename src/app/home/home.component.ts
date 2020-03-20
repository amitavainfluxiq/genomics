import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CookieService } from "ngx-cookie-service";
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform: FormGroup;

  public data: any;
  public serverUrl: any;
  public tokenViaCookie: any;
  public stateArray: any = [];
  public cityArray: any = [];
  constructor(public router: Router, public route: ActivatedRoute, public dialog: MatDialog, public formbuilder: FormBuilder, public activeroute: ActivatedRoute, public cookie: CookieService, public apiService: ApiService) {
    window.scrollTo(500, 0);
    this.apiService.gettemptoken().subscribe((res: any) => {
      this.cookie.set('jwtToken', res.token);
    });
    this.myform = this.formbuilder.group({

      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],

    })

  }

  ngOnInit() {

    this.getStatelist();
    this.getCitylist();
  }

  getStatelist() {
    this.apiService.getJsonObject('assets/json/state.json').subscribe((res: any) => {
      this.stateArray = res;
    });
  }

  getCitylist() {
    this.apiService.getJsonObject('assets/json/usa-cities.json').subscribe((res: any) => {
      this.cityArray = res;
    });
  }

  scroll() {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',

    // });

    document.querySelector('.landing_top_right_form').scrollIntoView({ behavior: 'smooth', });

  }


  doSubmit() {
    // console.log('ok');
    // this.data = this.myform.value;
    // console.log(this.data);

    for (let i in this.myform.controls) {
      this.myform.controls[i].markAsTouched();
    }
    if (this.myform.valid) {

      this.formpopupViewModal();



      // let  link = this.serverUrl +;
      let data = {
        source: "signupformList",
        token: this.tokenViaCookie,
        data: this.myform.value
      };
      this.apiService.addDataWithoutToken(data, 'addorupdatedata').subscribe(res => {

        let result: any = {};
        result = res;
        console.log(res);
        if (result.status == 'success') {

          this.myform.reset();
          this.router.navigateByUrl('/CGXInformation');

        }
      });
    }
  }

  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }

  formpopupViewModal() {

    const dialogGenreRef = this.dialog.open(Formpopup, {
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
  selector: 'Formpopup',
  templateUrl: 'formpopup.html',
})
export class Formpopup {



  constructor(public dialogRef: MatDialogRef<Formpopup>,
              /* @Inject(MAT_DIALOG_DATA) public data: DialogData*/) { }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}