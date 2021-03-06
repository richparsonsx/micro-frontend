import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as CoreActions from "src/app/core/state/core.actions";
import { Link } from '../../models/link.model';
import { LinkGroup } from '../../models/link-group.model';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss']
})
export class LinkCardComponent implements OnInit {

  @Input()
  linkGroup: LinkGroup;

  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit() {
  }

  linkClicked(link: Link) {
    switch (link.ldDescription) {
      case "New engagement":
      case "Recent engagements":
        window.open(link.ldWebPageLink, '_blank');
        break;
      case "Staff Manager":
      case "Client Manager":
        this.router.navigate(['/', 'am']);
        break;
      default:
        this.router.navigate(['/', 'tax']);
        break;
    }
    this.store.dispatch(new CoreActions.ToggleMenuPanelFlag(false));
  }

}
