package com.sk.yeogiyo.shop.controller;

import java.util.Base64;
import java.util.Base64.Encoder;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.TableMngSvc;
import com.sk.yeogiyo.shop.service.QrMngSvc;

@RestController
public class TableInfoController {
	@Autowired
	private TableMngSvc tableMngSvc;
	
	@Autowired
	private QrMngSvc qrMngSvc;
	
	@RequestMapping(value="/table_info", method=RequestMethod.GET)
	public Map<String, Object> tableInfo(Model model, @RequestParam("shopId") String id, @RequestParam("tableNum") int tableNum){
		Map<String, Object> tableInfo = null;
    Map<String, Object> retMap = null;
		tableInfo = tableMngSvc.getOneShopTableInfo(id, tableNum);
		String encodedQrImg = null;
		Encoder encoder = null;
		encoder = Base64.getEncoder();
		try {
		  encodedQrImg = new String(encoder.encode(qrMngSvc.getQrImgByte("https://www.naver.com").toByteArray()));
		} catch (Exception e) {
			encodedQrImg = "";
		}
		retMap = new HashMap<String, Object>();
		retMap.put("tableNum", tableInfo.get("tableNum"));
    retMap.put("desc", tableInfo.get("desc"));
    retMap.put("encodedQrImg", encodedQrImg);
		return retMap;
	}
}
