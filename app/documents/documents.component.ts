import { Component } from "@angular/core";
import { Document } from "./document";

@Component({
  moduleId: module.id,
  selector: "documents",
  templateUrl: "documents.component.html"
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "description",
      file_url: "https://www.google.com",
      updated_at: "11/11/11",
      image_url: "https://www.google.com"
    },
    {
      title: "My first Doc",
      description: "description",
      file_url: "https://www.google.com",
      updated_at: "11/11/11",
      image_url: "https://www.google.com"
    },
    {
      title: "My first Doc",
      description: "description",
      file_url: "https://www.google.com",
      updated_at: "11/11/11",
      image_url: "https://www.google.com"
    }
  ];
}
