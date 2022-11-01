import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { GetServicesService } from '../services/get-services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  @Input() contactData: any;
  bannerData = { image: "", breadCrumb: ['Home'] };
  imageBaseurl = environment.image_baseurl;
  headContent: any;
  iFrame: any;
  address: any;
  slug: any;
  subjectOptions: any;
  constructor(private messageService: MessageService, private getService: GetServicesService, private sanitizer: DomSanitizer, private activeRoute: ActivatedRoute, private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.contactData?.data?.forEach((response: any, index: any) => {
      if (response[0]?.section_name == 'banner') {
        this.bannerData.image = this.imageBaseurl + "banner_image/" + response[0]?.image;
      }
      if (response[0]?.section_name == 'second_section') {
        this.headContent = this.sanitizer.bypassSecurityTrustHtml(response[0]?.text_content);
      }
      if (response[0]?.section_name == 'third_section') {
        this.iFrame = this.sanitizer.bypassSecurityTrustHtml(response[0]?.text_content);
        this.address = response[0]?.text_content;
        console.log(typeof (this.iFrame), this.address)
      }
      if (index == 0) {
        this.bannerData.breadCrumb.push(response[0].page_name);
      }
    });
    this.getService.getPageData('/enquirysubject').subscribe((response: any) => {
      console.log(response);
      this.subjectOptions = response.data;
    })
  }
  contactFormData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })
  onConfirm() {
    this.messageService.clear('c');
  }

  onReject() {
    this.messageService.clear('c');
  }
  postDataForm(form: FormGroupDirective) {
    if (form.valid) {
      this.getService.postFormData(form.value, 'enquiry').subscribe((res: any) => {
        console.log(res);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Submitted Successfully!' });
        this.contactFormData.reset();
        Object.keys(this.contactFormData.controls).forEach(key => {
          this.contactFormData.controls[key].setErrors(null)
        });
        form.resetForm();
      })
    }
  }

}
