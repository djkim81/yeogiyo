package com.sk.sample.yeogiyo.orderresult.domain.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {
  @RequestMapping(value="/ui/{page}", method=RequestMethod.GET)
  public ModelAndView page(@PathVariable("page") String page) throws Exception {
    ModelAndView view = new ModelAndView(page);
    return view;
  }
}
