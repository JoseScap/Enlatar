import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { routesDictionary } from "@/constants/routesDictionary";

interface BreadcrumbsProps {
  url: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ url }) => {
  const renderBreadcrumbs = () => {
    let route = url.split('/')
      .slice(1)
      .map(slice => slice
        .split('-')
        .map(word => word.length < 3
          ? word.toUpperCase()
          : word[0].toUpperCase() + word.slice(1))
        .join(' ')
      );

    return route.map((item, index) => {
      let middlewareUrl = "/" + url.split("/").slice(1, index + 2).join("/");

      return (
        <BreadcrumbItem key={uuidv4()}>
          {route.length === index + 1
            ? item
            : <Link to={middlewareUrl}>
                {item}
              </Link>
          }
        </BreadcrumbItem>
      )
    })
  }

  const getBreadcrumbsTitle = () => {
    const routeArray = url.split("/")
    const route = routeArray[routeArray.length - 1]
    const title = routesDictionary[route] ?? route
    return title[0].toUpperCase() + title.slice(1)
  }

  return (
    <div className="mb-4">
      <div className="headline-2">{getBreadcrumbsTitle()}
        {getBreadcrumbsTitle() !== "Panel" &&
          <Breadcrumb tag="nav" listTag="div">
            {renderBreadcrumbs()}
          </Breadcrumb>
        }
      </div>
    </div>
  )
}

export default Breadcrumbs; 