import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usermodel } from '../usermodel';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'ns-form-by-code',
  templateUrl: './form-by-code.component.html',
  styleUrls: ['./form-by-code.component.css']
})
export class FormByCodeComponent implements OnInit {

  userForm = this.fb.group({
    username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    password: this.fb.control('', Validators.required)
  });


  constructor(private fb: FormBuilder) {

    // this.userForm = fb.group({
    //   username:'',
    //   password:''
    // });

   }

   reset(){
    this.userForm.reset();
    // this.usernameCtrl.setValue('');
    // this.passwordCtrl.setValue('');
   }

   register():void{
    console.log(this.userForm.value as Usermodel);
   }

  ngOnInit(): void {
  }

  topdf(){
    const dashboard = document.getElementById('dashboard') as HTMLElement;

    let exempleEvent = [
      {date:"12/01/2022",title:"barbecue",description:"dehors",time_begin:14,time_end:18,visibility:true},
      {date:"28/06/2022",title:"reunion",description:"fin de sprint",time_begin:18,time_end:19,visibility:true},
      {date:"13/12/2022",title:"holiday",description:"vacance",time_begin:14,time_end:18,visibility:true}
    ]
    let dashboard2 = document.createElement("table");
    let thead = document.createElement("thead");
    thead.style.color ="red";
    let tbody = document.createElement("tbody");

    let trHead = document.createElement("tr");
    let thDate = document.createElement("th"); thDate.textContent = "Date";
    let thTitle = document.createElement("th"); thTitle.textContent = "Titre";
    let thDescription = document.createElement("th"); thDescription.textContent = "Description";
    let thTimeB = document.createElement("th"); thTimeB.textContent = "heure de debut";
    let thTimeE = document.createElement("th"); thTimeE.textContent = "heure de fin";
    let thVisibility = document.createElement("th"); thVisibility.textContent = "visibilité";

    trHead.append(thDate,thTitle,thDescription,thTimeB,thTimeE,thVisibility);
    thead.appendChild(trHead);

    for(let i = 0; i<exempleEvent.length;i++){
      let trBody = document.createElement("tr");
      let tdDate = document.createElement("td");
      tdDate.textContent = exempleEvent[i].date;
      let tdTitle = document.createElement("td");
      tdTitle.textContent = exempleEvent[i].title;
      let tdDescription = document.createElement("td");
      tdDescription.textContent = exempleEvent[i].description;
      let tdTimeB = document.createElement("td");
      tdTimeB.textContent = exempleEvent[i].time_begin.toString();
      let tdTimeE = document.createElement("td");
      tdTimeE.textContent = exempleEvent[i].time_end.toString();
      let tdVisibility = document.createElement("td");
      tdVisibility.textContent = exempleEvent[i].visibility == true? "true":"false";

      trBody.append(tdDate, tdTitle, tdDescription, tdTimeB, tdTimeE, tdVisibility);
      tbody.appendChild(trBody);

    }

    dashboard2.appendChild(thead);
    dashboard2.appendChild(tbody);
    dashboard.appendChild(dashboard2);

    // const dashboardHeight = dashboard.clientHeight;
    // const dashboardWidth = dashboard.clientWidth;
    // const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };

    domtoimage.toPng(dashboard).then((imgData) => {
         const doc = new jsPDF();
         const imgProps = doc.getImageProperties(imgData);
         const pdfWidth = doc.internal.pageSize.getWidth();
         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
         doc.save('test_1.pdf');
    });
  }

}
