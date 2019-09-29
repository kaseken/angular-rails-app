import { Component } from "@angular/core";
import { Proposal } from "./proposal";

@Component({
  moduleId: module.id,
  selector: "proposal-list",
  templateUrl: "proposal-list.component.html",
  styleUrls: ["proposal-list.component.css"]
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(
    15,
    "ABC company",
    "http://portfolio.com",
    "Ruby on Rails",
    150,
    120,
    15,
    "example@email.com"
  );
  proposalTwo: Proposal = new Proposal(
    15,
    "ABC company",
    "http://portfolio.com",
    "Ruby on Rails",
    150,
    120,
    15,
    "example@email.com"
  );
  proposalThree: Proposal = new Proposal(
    15,
    "ABC company",
    "http://portfolio.com",
    "Ruby on Rails",
    150,
    120,
    15,
    "example@email.com"
  );

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];
}
